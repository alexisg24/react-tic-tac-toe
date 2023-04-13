const ResetButton = ({children, resetGame}) =>{
    const handleClick = () =>{
      resetGame()
    }
    return(
      <button onClick={handleClick}>{children}</button>
    )
}

export { ResetButton }