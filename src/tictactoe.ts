type Player = "X" | "O"
type GameState = {
    currentPlayer: Player
    winner: Player | undefined
    board: (string | undefined)[][]
}

export const makeMove = (gameState: GameState, row: number, col: number) => {
    const oldBoard = gameState.board
    const newRow = [...gameState.board[row]]

    let newPlayer = gameState.currentPlayer

    newRow[col] = gameState.currentPlayer
    newPlayer = gameState.currentPlayer === "X" ? "O" : "X"

    const newBoard = [
        ...oldBoard.slice(0, row),
        newRow,
        ...oldBoard.slice(row + 1)
    ]

    let newWinner
    
    for (let i = 0; i < newBoard.length; i++) {
        if (newBoard[i].every(cell => cell && cell === newBoard[i][0])) {
            newWinner = newBoard[i][0]
        }
    }

    for (let c = 0; c < 3; c++) {
        if (newBoard.every(row => row[c] && row[c] === newBoard[0][c])) {
            newWinner = newBoard[0][c]
        }
    }

    if ([newBoard[0][0], newBoard[1][1], newBoard[2][2]].every(cell => cell && cell === newBoard[0][0])) {
        newWinner = newBoard[0][0]
    }

    if ([newBoard[0][2], newBoard[1][1], newBoard[2][0]].every(cell => cell && cell === newBoard[0][2])) {
        newWinner = newBoard[0][2]
    }

    // if row 0 3 x or o
    // if row 1 3 x or o
    // if row 2 3 x or o
    // if col 0 3 x or o
    // if col 1 3 x or o
    // if col 2 3 x or o
    // if [0][0] [1][1] [2][2]
    // if [2][2] [1[1] [2][0]

    const newGameState = {
        currentPlayer: newPlayer,
        winner: newWinner,
        board: newBoard
    }
    return newGameState
}

export const initialBoard = {
    currentPlayer: "X",
    winner: undefined,
    board: [
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
        [undefined, undefined, undefined]]
}