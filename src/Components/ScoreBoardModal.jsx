const ScoreBoardModal = ({score, setScore}) =>{
    const handleClick = () =>{
        setScore(!score)
    }
    if(!score) return null
    return (
     <section className="modal">
       <div className="text">
       <div className="close" onClick={handleClick}>X</div>
         <h2>
            Best Players!
         </h2>
         <article className="header__list">
            <div className="header__list-item">Position</div>
            <div className="header__list-item middle">Nickname</div>
            <div className="header__list-item">Points</div>
       </article>
       <article className="list">
            <div className="list__child">
                <div>🥇</div>
                <div>Nickname</div>
                <div>0</div>
            </div>
            <div className="list__child">
                <div>🥈</div>
                <div>Nickname</div>
                <div>0</div>
            </div>
            <div className="list__child">
                <div>🥉</div>
                <div>Nickname</div>
                <div>0</div>
            </div>
       </article>
       </div>
     </section>
    )
}

export { ScoreBoardModal }