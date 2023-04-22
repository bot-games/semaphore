package join

import (
	"context"
	"errors"

	"github.com/go-qbit/rpc"

	"github.com/bot-games/semaphore"
	"github.com/bot-games/semaphore/pb"

	manager "github.com/bot-games/game-manager"
)

type reqV1 struct {
	Token  string `json:"token" desc:"User bot token from [profile](/profile)"`
	GameId string `json:"game_id"`
	X      uint8  `json:"x"`
	Y      uint8  `json:"y"`
}

var errorsV1 struct {
	InvalidToken      rpc.ErrorFunc `desc:"Invalid token"`
	InvalidGameId     rpc.ErrorFunc `desc:"Invalid game ID"`
	InvalidCoordinate rpc.ErrorFunc `desc:"Invalid coordinate"`
}

func (m *Method) ErrorsV1() interface{} {
	return &errorsV1
}

func (m *Method) V1(ctx context.Context, r *reqV1) (*struct{}, error) {
	if err := m.gm.DoAction(ctx, r.Token, r.GameId, &pb.Action{
		X: uint32(r.X),
		Y: uint32(r.Y),
	}); err != nil {
		if errors.Is(err, manager.ErrInvalidToken) {
			return nil, errorsV1.InvalidToken("Invalid token")
		} else if errors.Is(err, manager.ErrInvalidGameId) {
			return nil, errorsV1.InvalidGameId("Invalid game ID")
		} else if errors.Is(err, semaphore.ErrInvalidCoordinate) {
			return nil, errorsV1.InvalidCoordinate("Invalid coordinate")
		}

		return nil, err
	}

	return &struct{}{}, nil
}
