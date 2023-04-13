import { useState } from "react"
import { TURNS } from "./constants"
import { ResetButton } from "./Components/ResetButton"
import { WinnerModal } from "./Components/WinnerModal"
import { GameBoard } from "./Components/GameBoard"
import { TurnIndicator } from "./Components/TurnIndicator"
import { boardInitialState, turnInitialState, updateBoard } from "./utils/board"
import { resetGameLS } from "./utils/storage"
import { Header } from "./Components/Header"

function App() {
  const [ board, setBoard ] = useState(boardInitialState)
  const [ turn, setTurn ] = useState(turnInitialState)
  const [ winner, setWinner ] = useState(null);

  const resetGame = () =>{
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null)
    resetGameLS();
  }

  const update = (index) =>{
    updateBoard({board, setBoard, winner, setWinner, turn, setTurn, index})
  }

  return (
    <>
    <Header/>
    <main  className="board">
      <h1>Tic Tac Toe 🎮</h1>
      <ResetButton resetGame={resetGame}>Reset Game</ResetButton>
      <GameBoard board={board} updateBoard={update} />
      <TurnIndicator turn={turn} />
      <WinnerModal resetGame={resetGame} winner={winner}/>
    </main>
  </>
  )
} 

export default App
