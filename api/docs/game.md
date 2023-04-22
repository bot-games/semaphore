## Material

8 green, 8 yellow and 8 red pieces shared by the players.

## Objective

Be the first to get a line of three pieces of the same color horizontally, vertically or diagonally.

## Rules

The game takes place on the following board, which is initially empty.

```
    0    1    2    3 
  ┌────┬────┬────┬────┐
0 │ 🤍 │ 🤍 │ 🤍 │ 🤍 │
  ├────┼────┼────┼────┤
1 │ 🤍 │ 🤍 │ 🤍 │ 🤍 │
  ├────┼────┼────┼────┤
2 │ 🤍 │ 🤍 │ 🤍 │ 🤍 │
  └────┴────┴────┴────┘
```

On each turn, each player performs one of the following actions:

* Place a green piece on an empty square;
* Replace a green piece with a yellow piece;
* Replace a yellow piece with a red piece.

Please note that the red pieces cannot be replaced. This means that the game must always end: as the board fills with red
pieces, it is inevitable that a line of three pieces will appear.

```
    0    1    2    3 
  ┌────┬────┬────┬────┐
0 │ 💚 │ 💜 │ 💛 │ 💜 │
  ├────┼────┼────┼────┤
1 │ 💛 │ 💚 │ 💜 │ 💚 │
  ├────┼────┼────┼────┤
2 │ 💛 │ 🤍 │ 🤍 │ 💛 │
  └────┴────┴────┴────┘
```

The diagram above shows a position with three possibilities for immediate victory:

1. Replace the green piece on {0;0} (creates a vertical three in a row of yellow);
2. Replace the yellow piece on {2;3} (creates a diagonal three in a row of red);
3. Drop a green piece on {2;2} (creates a diagonal three in a row of green).

## How to start a game

1. Call the method **[join](#/RPC%20methods/join_v1)**.
2. Call the method **[wait_turn](#/RPC%20methods/wait_turn_v1)** to receive the current game state.
3. Call the action method (you have 5 seconds).
4. Go to step 2.

For more information see methods description below.

## The source code and bot examples

You can find them in the [GitHub repository](https://github.com/bot-games/semaphore).

## LocalRunner

See [README](https://github.com/bot-games/semaphore/tree/master/cmd/localrunner)