import { useState } from "react"
import { ScoreBoardModal } from "./ScoreBoardModal";

const ScoreBoard = () =>{
    const [score, setScore] = useState(false);
    const scoreBoardModal = () =>{
        setScore(!score)
    }
    return (
        <>
            <p onClick={scoreBoardModal}>Score Board 📊</p>
            <ScoreBoardModal score={score} setScore={setScore}/>
        </>
    )
}

export { ScoreBoard }