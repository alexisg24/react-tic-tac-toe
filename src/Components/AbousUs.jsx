import { useState } from "react"
import { AboutUsModal } from "./AboutUsModal";

const AboutUs = () =>{
    const [about, setAbout] = useState(false);
    const aboutUsModal = () =>{
        setAbout(!about)
    }
    return (
        <>
            <p onClick={aboutUsModal}>About Us 🔎</p>
            <AboutUsModal about={about} setAbout={aboutUsModal}/>
        </>
    )
}

export { AboutUs }