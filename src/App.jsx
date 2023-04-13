import { useState } from "react"
import { TURNS } from "./constants"
import { ResetButton } from "./Components/ResetButton"
import { WinnerModal } from "./Components/WinnerModal"
import { GameBoard } from "./Components/GameBoard"
import { TurnIndicator } from "./Components/TurnIndicator"
import { updateBoard } from "./utils/board"

function App() {
  const [ board, setBoard ] = useState(Array(9).fill(null))
  const [ turn, setTurn ] = useState(TURNS.X)
  const [ winner, setWinner ] = useState(null);

  const resetGame = () =>{
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null)
  }

  const update = (index) =>{
    updateBoard({board, setBoard, winner, setWinner, turn, setTurn, index})
  }

  return (
    <main  className="board">
      <h1>Tic Tac Toe</h1>
      <ResetButton resetGame={resetGame}>Reset Game</ResetButton>
      <GameBoard board={board} updateBoard={update} />
      <TurnIndicator turn={turn} />
      <WinnerModal resetGame={resetGame} winner={winner}/>
    </main>
  )
} 

export default App
