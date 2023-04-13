import confetti from "canvas-confetti";
import { TURNS, WINNER_COMBOS } from "../constants";
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
}
export { checkWinner, checkEndGame, updateBoard }