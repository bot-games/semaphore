package api

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
)

type Api struct {
	url string
}

type Game struct {
	Id string `json:"id"`
}

type GameState struct {
	TickId uint16       `json:"tick_id"`
	Field  [3][4]string `json:"field"`
}

type Error struct {
	Code    string      `json:"code"`
	Message string      `json:"message"`
	Data    interface{} `json:"data"`
}

func (e *Error) Error() string {
	return e.Message
}

func New(url string) *Api {
	return &Api{url: url}
}

func (a *Api) Join(token string, debug bool) (*Game, error) {
	game := &Game{}

	if err := a.call("/join/v1", struct {
		Token string `json:"token"`
		Debug bool   `json:"debug"`
	}{token, debug}, game); err != nil {
		return nil, err
	}

	return game, nil
}

func (a *Api) WaitTurn(token, gameId string) (*GameState, error) {
	gameState := &GameState{}

	if err := a.call("/wait_turn/v1", struct {
		Token  string `json:"token"`
		GameId string `json:"game_id"`
	}{token, gameId}, gameState); err != nil {
		return nil, err
	}

	return gameState, nil
}

func (a *Api) Action(token, gameId string, x, y uint8) error {
	var resp struct{}

	return a.call("/action/v1", struct {
		Token  string `json:"token"`
		GameId string `json:"game_id"`
		X      uint8  `json:"x"`
		Y      uint8  `json:"y"`
	}{token, gameId, x, y}, &resp)
}

func (a *Api) call(method string, req, resp interface{}) error {
	buf := &bytes.Buffer{}
	if err := json.NewEncoder(buf).Encode(req); err != nil {
		return err
	}

	httpResp, err := http.Post(a.url+method, "application/json", buf)
	if err != nil {
		return err
	}
	defer httpResp.Body.Close()

	switch httpResp.StatusCode {
	case http.StatusOK:
		return json.NewDecoder(httpResp.Body).Decode(resp)

	case http.StatusBadRequest:
		apiErr := &Error{}
		if err := json.NewDecoder(httpResp.Body).Decode(apiErr); err != nil {
			return err
		}
		return apiErr

	default:
		return fmt.Errorf("invalid status %s", httpResp.Status)
	}
}
