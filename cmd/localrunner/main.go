package main

import (
	manager "github.com/bot-games/game-manager"
	"github.com/bot-games/localrunner"
	"github.com/bot-games/localrunner/scheduler"
	"github.com/bot-games/localrunner/storage"
	"github.com/bot-games/semaphore"
	"github.com/bot-games/semaphore/api"
)

func main() {
	gameStorage := storage.New()

	localrunner.Start(
		manager.New(
			"semaphore", "Semaphore",
			semaphore.Semaphore{},
			gameStorage, scheduler.New(),
			func(m *manager.GameManager) manager.GameApi {
				return api.New(m)
			},
		),
		gameStorage,
	)
}
