package wait_turn

import (
	"context"
	"errors"

	"github.com/go-qbit/rpc"

	manager "github.com/bot-games/game-manager"

	"github.com/bot-games/semaphore/pb"
)

type reqV1 struct {
	Token  string `json:"token" desc:"User bot token from [profile](/profile)"`
	GameId string `json:"game_id"`
}

type stateV1 struct {
	TickId uint16       `json:"tick_id"`
	Field  [3][4]string `json:"field"`
}

var errorsV1 struct {
	InvalidToken  rpc.ErrorFunc `desc:"Invalid token"`
	InvalidGameId rpc.ErrorFunc `desc:"Invalid game ID"`
	GameFinished  rpc.ErrorFunc `desc:"The game has finished. The result is in the data field, can be one of **Draw**, **Win**, **Defeat**"`
}

func (m *Method) ErrorsV1() interface{} {
	return &errorsV1
}

func (m *Method) V1(ctx context.Context, r *reqV1) (*stateV1, error) {
	tickInfo, err := m.gm.WaitTurn(ctx, r.Token, r.GameId)
	if err != nil {
		errGameFinished := &manager.ErrEndOfGame{}

		if errors.Is(err, manager.ErrInvalidToken) {
			return nil, errorsV1.InvalidToken("Invalid token")
		} else if errors.Is(err, manager.ErrInvalidGameId) {
			return nil, errorsV1.InvalidGameId("Invalid game ID")
		} else if errors.As(err, errGameFinished) {
			var gameResult string
			if errGameFinished.Winner == 0 {
				gameResult = "Draw"
			} else if errGameFinished.IsYou {
				gameResult = "Win"
			} else {
				gameResult = "Defeat"
			}

			return nil, errorsV1.GameFinished("The game has finished", gameResult)
		}

		return nil, err
	}

	state := tickInfo.State.(*pb.State)
	field := [3][4]string{}
	for i, cell := range state.Field {
		field[i/4][i%4] = cell.String()
	}

	return &stateV1{
		TickId: tickInfo.Id,
		Field:  field,
	}, nil
}
