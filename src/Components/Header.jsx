import { AboutUs } from "./AbousUs"
import { ScoreBoard } from "./ScoreBoard"

const Header = () =>{
    return (
        <header className="header-container">
            <p>Home 🏠</p>
            <ScoreBoard/>
            <AboutUs />
        </header>
    )
}

export { Header }