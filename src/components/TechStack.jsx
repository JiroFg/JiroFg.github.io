import TechCard from './TechCard'
import './TechStack.css'

export default function TechStack(){
    return(
        <div className='tech-stack'>
            <div className='tech-head'>
                <img className='tech-icon' src="./tech.svg" alt="Tech Stack"/><h2>Stack Tecnológico:</h2>
            </div>
            <div className='tech-body'>
                <div>
                    <h3 className='front'>Frontend</h3>
                    <div className='tech-list'>
                        <TechCard name={"JavaScript"} imgUrl={"./techstack/js.svg"}/>
                        <TechCard name={"CSS"} imgUrl={"./techstack/css.svg"}/>
                        <TechCard name={"HTML"} imgUrl={"./techstack/html.svg"}/>
                        <TechCard name={"React"} imgUrl={"./techstack/react.svg"}/>
                        <TechCard name={"Tailwind"} imgUrl={"./techstack/tailwind.svg"}/>
                    </div>
                </div>
                <div>
                    <h3 className='back'>Backend</h3>
                    <div className='tech-list'>
                        <TechCard name={"Python"} imgUrl={"./techstack/python.svg"}/>
                        <TechCard name={"Django"} imgUrl={"./techstack/django.svg"}/>
                        <TechCard name={"FastAPI"} imgUrl={"./techstack/fastapi.svg"}/>
                        <TechCard name={"MongoDB"} imgUrl={"./techstack/mongodb.svg"}/>
                        <TechCard name={"Postgres"} imgUrl={"./techstack/postgresql.svg"}/>
                    </div>
                </div>
                <div>
                    <h3 className='tools'>Tools</h3>
                    <div className='tech-list'>
                        <TechCard name={"Docker"} imgUrl={"./techstack/docker.svg"}/>
                        <TechCard name={"Linux"} imgUrl={"./techstack/linux.svg"}/>
                        <TechCard name={"Git"} imgUrl={"./techstack/git.svg"}/>
                        <TechCard name={"Redis"} imgUrl={"./techstack/redis.svg"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}