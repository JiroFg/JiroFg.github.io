import { useState } from 'react'
import Experience from '../components/Experience'
import TechStack from '../components/TechStack'
import './Home.css'

export default function Home(){

    const [isDownloading, setIsDownloading] = useState(false)

    function handleMouseEnter(){
        let bubbleContainer = document.getElementById('bubbleContainer')
        bubbleContainer.style.animation = 'fadeIn 2s forwards'
        setTimeout(() => {
            bubbleContainer.style.animation = ''
        }, "2000");
    }
    
    function handleCvBtn(event){
        let cvBtn = event.target
        cvBtn.style.pointerEvents = 'none'
        cvBtn.style.backgroundColor = '#b3b6b7'
        setIsDownloading((isDownloading)=>!isDownloading)
        setTimeout(() => {
            cvBtn.style.pointerEvents = 'auto'
            cvBtn.style.backgroundColor = 'var(--contrast-color)'
            setIsDownloading((isDownloading)=>!isDownloading)
        }, "2000");
    }

    return(
        <div className="home">
            <div className="home-intro">
                <div className="home-info">
                    <h1 onMouseEnter={handleMouseEnter}>Edson Jair <br />Fuentes García</h1>
                    <h2>Full-Stack Developer desde hace más de 3 años</h2>
                    <p>Desarrollando con tecnologías y frameworks modernos. ¡Aplicando las mejores prácticas para proyectos <strong>mantenibles</strong>, <strong>escalables</strong> y <strong>testeables!</strong></p>
                    <Experience/>
                </div>
                <div className="home-img">
                    <div id='bubbleContainer' className='bubble-container'>
                        <div className="bubble"><span>✌️</span></div>
                    </div>
                    <img src="/profile.jpeg" alt="profile" onMouseEnter={handleMouseEnter}/>
                    <div className='cv-container'>
                        <a
                        href={"./cv_edson_fuentes.pdf"}
                        download={"cv_edson_fuentes.pdf"}
                        className='cv-btn'
                        onClick={handleCvBtn}
                        >
                            {!isDownloading ? (
                                    "Descargar CV"
                                ):(
                                    <div className='loader'></div>
                                )
                            }
                        </a>
                    </div>
                </div>
            </div>
            <TechStack/>
        </div>
    )
}