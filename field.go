package semaphore

import (
	"errors"

	"github.com/bot-games/semaphore/pb"
)

const maxPieces = 8

var (
	ErrInvalidCoordinate = errors.New("invalid coordinate")
	ErrInvalidCell       = errors.New("invalid cell")
)

func coordsToCell(x, y uint32) (uint8, error) {
	if x > 3 || y > 2 {
		return 0, ErrInvalidCoordinate
	}

	return uint8(y*4 + x), nil
}

func getAvailableCells(state *pb.State) []uint8 {
	pieces := [4]uint8{}
	for _, c := range state.Field {
		pieces[c]++
	}

	res := make([]uint8, 0, len(state.Field))

	for i, c := range state.Field {
		if c == pb.Cell_Red || c != pb.Cell_Empty && pieces[c] >= maxPieces {
			continue
		}

		res = append(res, uint8(i))
	}

	return res
}

func checkCell(state *pb.State, cell uint8) error {
	for _, cellId := range getAvailableCells(state) {
		if cellId == cell {
			return nil
		}
	}

	return ErrInvalidCell
}

func hasWinner(state *pb.State) bool {
	f := state.Field
	// Check horizontal
	if f[0] != pb.Cell_Empty && f[0] == f[1] && f[1] == f[2] ||
		f[1] != pb.Cell_Empty && f[1] == f[2] && f[2] == f[3] ||
		// Line 2
		f[4] != pb.Cell_Empty && f[4] == f[5] && f[5] == f[6] ||
		f[5] != pb.Cell_Empty && f[5] == f[6] && f[6] == f[7] ||
		// Line 3
		f[8] != pb.Cell_Empty && f[8] == f[9] && f[9] == f[10] ||
		f[9] != pb.Cell_Empty && f[9] == f[10] && f[10] == f[11] {
		return true
	}

	// Check verticals
	if f[0] != pb.Cell_Empty && f[0] == f[4] && f[4] == f[8] ||
		f[1] != pb.Cell_Empty && f[1] == f[5] && f[5] == f[9] ||
		f[2] != pb.Cell_Empty && f[2] == f[6] && f[6] == f[10] ||
		f[3] != pb.Cell_Empty && f[3] == f[7] && f[7] == f[11] {
		return true
	}

	// Check diagonals
	if f[0] != pb.Cell_Empty && f[0] == f[5] && f[5] == f[10] ||
		f[1] != pb.Cell_Empty && f[1] == f[6] && f[6] == f[11] ||
		f[2] != pb.Cell_Empty && f[2] == f[5] && f[5] == f[8] ||
		f[3] != pb.Cell_Empty && f[3] == f[6] && f[6] == f[9] {
		return true
	}

	return false
}
