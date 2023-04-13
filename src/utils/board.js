import confetti from "canvas-confetti";
import { TURNS, WINNER_COMBOS } from "../constants";
import { saveGameToLS } from "./storage";
const checkWinner = (board) =>{
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if(board[a] && board[a] === board[b] && board[a] === board[c]){
        return board[a]
      }
    }
    return null
}

const checkEndGame = (board) =>{
    return board.every(square => square !== null)
  }

const updateBoard = ({board, setBoard, winner, setWinner, turn, setTurn, index }) =>{
   //check if position is writted
   if(board[index] || winner) return true

   //update board state
   const newBoard = [...board];
   newBoard[index] = turn;
   setBoard(newBoard)

   //check winner
   const newWinner = checkWinner(newBoard)
   if(newWinner){ 
     confetti();
     setWinner(newWinner)
   }else if(checkEndGame(newBoard)){
     setWinner(false)
   }
   //update new turn state
   const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
   setTurn(newTurn)

   //SaveGame in LS
   saveGameToLS({board: newBoard, turn: newTurn})
}

const boardInitialState = () =>{
  const localStorageBoard = window.localStorage.getItem('board')
  return localStorageBoard ? JSON.parse(localStorageBoard) : Array(9).fill(null)
}

const turnInitialState = () =>{
  const localStorageTurn = window.localStorage.getItem('turn')
  return localStorageTurn ?? TURNS.X
}

export { checkWinner, checkEndGame, updateBoard, boardInitialState, turnInitialState }