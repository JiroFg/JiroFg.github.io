import TechStack from '../components/TechStack'
import './Home.css'

export default function Home(){

    function handleImgClick(){
        console.log("hola")
    }

    return(
        <div className="home">
            <div className="home-intro">
                <div className="home-info">
                    <h1>Edson Jair Fuentes García</h1>
                    <h2>Fullstack Developer desde hace más de 3 años</h2>
                    <p>Desarrollando con tecnologías y frameworks modernos, ¡aplicando las mejores practicas para proyectos <strong>escalables</strong> y <strong>testeables!</strong></p>
                    <div>
                        Experiencia laboral:
                        <ul>
                            <li>Kuantik - Backend Developer 2022-2023</li>
                            <li>Global Business Smart - Fullstack Developer 2023-2024</li>
                            <li>Media Aerea - Fullstack Developer 2024-2025</li>
                        </ul>
                    </div>
                    <TechStack/>
                </div>
                <div className="home-img">
                    <img src="/profile.jpeg" alt="profile" onMouseEnter={handleImgClick}/>
                </div>
            </div>
        </div>
    )
}