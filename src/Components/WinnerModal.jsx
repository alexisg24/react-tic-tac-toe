import { ResetButton } from "./ResetButton"
import { Square } from "./Square"

const WinnerModal = ({winner, resetGame}) =>{
    if(winner === null) return null
    const winnerText = winner === false ? 'Draw' : `${winner} Won!`
    return (
     <section className="winner">
       <div className="text">
         <h2>
            {winnerText}
         </h2>
         <header className="win">
            {winner && <Square>{winner}</Square>}
         </header>
         <footer>
           <ResetButton resetGame={resetGame}>Play Again!</ResetButton>
         </footer>
       </div>
     </section>
    )
}

export { WinnerModal }