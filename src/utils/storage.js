const saveGameToLS = ({board, turn}) => {
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
}

const resetGameLS = () =>{
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}

export { saveGameToLS, resetGameLS }