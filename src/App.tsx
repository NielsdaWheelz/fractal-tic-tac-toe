import './App.css'
import { useState } from "react"
import { makeMove, initialBoard } from  "./tictactoe.ts"

const App = () => {
  const [gameState, setGameState] = useState(initialBoard)

  const handleClick = (row: number, col: number) => {
    if (gameState.winner !== undefined) {
      return
    }

    if (gameState.board[row][col] !== undefined) {
      return
    }
    setGameState(prevGameState => makeMove(prevGameState, row, col))
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline">TicTac</h1>
      <div className="container">
        {/* <Square key={`${row}-${col}`} row={row} col={col} value={gameState.board[row][col]} onClick={handleClick} /> */}
        <div onClick={() => handleClick(0, 0)} className="square" id="one">{gameState.board[0][0]}</div>
        <div onClick={() => handleClick(0, 1)} className="square" id="one">{gameState.board[0][1]}</div>
        <div onClick={() => handleClick(0, 2)} className="square" id="one">{gameState.board[0][2]}</div>
        <div onClick={() => handleClick(1, 0)} className="square" id="one">{gameState.board[1][0]}</div>
        <div onClick={() => handleClick(1, 1)} className="square" id="one">{gameState.board[1][1]}</div>
        <div onClick={() => handleClick(1, 2)} className="square" id="one">{gameState.board[1][2]}</div>
        <div onClick={() => handleClick(2, 0)} className="square" id="one">{gameState.board[2][0]}</div>
        <div onClick={() => handleClick(2, 1)} className="square" id="one">{gameState.board[2][1]}</div>
        <div onClick={() => handleClick(2, 2)} className="square" id="one">{gameState.board[2][2]}</div>
      </div>
      {gameState.winner !== undefined && <div>Winner:{gameState.winner}</div>}
    </>
  )
}

export default App
