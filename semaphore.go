//go:generate protoc -I proto --go_out=. semaphore/options.proto semaphore/state.proto semaphore/action.proto
package semaphore

import (
	"math/rand"

	"google.golang.org/protobuf/proto"

	manager "github.com/bot-games/game-manager"
	"github.com/bot-games/semaphore/pb"
)

type Semaphore struct{}

func (s Semaphore) Init() (proto.Message, proto.Message, uint8) {
	state := &pb.State{
		Field:   make([]pb.Cell, 12),
		CurUser: uint32(rand.Int31n(2)),
	}

	return &pb.Options{}, state, uint8(1 << state.CurUser)
}

func (s Semaphore) DecodeState(data []byte) (proto.Message, error) {
	state := &pb.State{}
	if err := proto.Unmarshal(data, state); err != nil {
		return nil, err
	}

	return state, nil
}

func (s Semaphore) DecodeAction(data []byte) (proto.Message, error) {
	action := &pb.Action{}
	if err := proto.Unmarshal(data, action); err != nil {
		return nil, err
	}

	return action, nil
}

func (s Semaphore) CheckAction(tickInfo *manager.TickInfo, action proto.Message) error {
	pbAction := action.(*pb.Action)
	cellId, err := coordsToCell(pbAction.X, pbAction.Y)
	if err != nil {
		return err
	}

	return checkCell(tickInfo.State.(*pb.State), cellId)
}

func (s Semaphore) ApplyActions(tickInfo *manager.TickInfo, actions []manager.Action) *manager.TickResult {
	state := tickInfo.State.(*pb.State)
	for _, action := range actions {
		pbAction := action.Action.(*pb.Action)
		cellId, _ := coordsToCell(pbAction.X, pbAction.Y)
		switch state.Field[cellId] {
		case pb.Cell_Empty:
			state.Field[cellId] = pb.Cell_Green
		case pb.Cell_Green:
			state.Field[cellId] = pb.Cell_Yellow
		case pb.Cell_Yellow:
			state.Field[cellId] = pb.Cell_Red
		}
	}

	if len(getAvailableCells(state)) == 0 {
		return &manager.TickResult{
			GameFinished: true,
			Winner:       0,
			NewState:     tickInfo.State,
		}
	}

	if hasWinner(state) {
		return &manager.TickResult{
			GameFinished: true,
			Winner:       1 << state.CurUser,
			NewState:     tickInfo.State,
		}
	}

	if state.CurUser == 0 {
		state.CurUser = 1
	} else {
		state.CurUser = 0
	}

	return &manager.TickResult{
		GameFinished:    false,
		NewState:        tickInfo.State,
		NextTurnPlayers: 1 << state.CurUser,
	}
}

func (s Semaphore) SmartGuyTurn(tickInfo *manager.TickInfo) proto.Message {
	availableCells := getAvailableCells(tickInfo.State.(*pb.State))
	target := availableCells[rand.Intn(len(availableCells))]

	return &pb.Action{
		X: uint32(target % 4),
		Y: uint32(target / 4),
	}
}
