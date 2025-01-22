import { useState } from 'react'
import Experience from '../components/Experience'
import TechStack from '../components/TechStack'
import './Home.css'

export default function Home(){

    const [isGreeting, setIsGreeting] = useState(false)

    function handleMouseEnter(){
        let bubbleContainer = document.getElementById('bubbleContainer')
        bubbleContainer.style.animation = 'fadeIn 2s forwards'
        setTimeout(() => {
            bubbleContainer.style.animation = ''
        }, "2000");
    }

    return(
        <div className="home">
            <div className="home-intro">
                <div className="home-info">
                    <h1 onMouseEnter={handleMouseEnter}>Edson Jair Fuentes García</h1>
                    <h2>Fullstack Developer desde hace más de 3 años</h2>
                    <p>Desarrollando con tecnologías y frameworks modernos, ¡aplicando las mejores practicas para proyectos <strong>escalables</strong> y <strong>testeables!</strong></p>
                    <Experience/>
                    <TechStack/>
                </div>
                <div className="home-img">
                    <div id='bubbleContainer' className='bubble-container'>
                        <div className="bubble"><span>✌️</span></div>
                    </div>
                    <img src="/profile.jpeg" alt="profile" onMouseEnter={handleMouseEnter}/>
                </div>
            </div>
        </div>
    )
}