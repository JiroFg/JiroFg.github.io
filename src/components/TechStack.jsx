import TechCard from './TechCard'
import './TechStack.css'

export default function TechStack(){
    return(
        <div className='tech-stack'>
            <h2>Stack tecnológico:</h2>
            <div className='tech-list'>
                <TechCard name={"Python"} imgUrl={"./techstack/python.svg"} bg='#22506f'/>
                <TechCard name={"JavaScript"} imgUrl={"./techstack/js.svg"} bg='#3a4349'/>
                <TechCard name={"CSS"} imgUrl={"./techstack/css.svg"} bg='#4a97ca'/>
                <TechCard name={"HTML"} imgUrl={"./techstack/html.svg"} bg='#3a4349'/>
                <TechCard name={"Django"} imgUrl={"./techstack/django.svg"} bg='#3a4349'/>
                <TechCard name={"FastAPI"} imgUrl={"./techstack/fastapi.svg"} bg='#3a4349'/>
                <TechCard name={"React"} imgUrl={"./techstack/react.svg"} bg='#3a4349'/>
                <TechCard name={"MongoDB"} imgUrl={"./techstack/mongodb.svg"} bg='#3a4349'/>
                <TechCard name={"Postgres"} imgUrl={"./techstack/postgresql.svg"} bg='#3a4349'/>
                <TechCard name={"Docker"} imgUrl={"./techstack/docker.svg"} bg='#3a4349'/>
                <TechCard name={"Linux"} imgUrl={"./techstack/linux.svg"} bg='#3a4349'/>
            </div>
        </div>
    )
}