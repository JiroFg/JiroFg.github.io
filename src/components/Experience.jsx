import ExpCard from './ExpCard';
import './Experience.css'

export default function Experience(){

    return(
        <div className='experience'>
            <div className='exp-head'>
                <img className='exp-icon' src="./work_history.svg" alt="Experience"/><h2>Experiencia laboral:</h2>
            </div>
            <ExpCard name={"Kuantik"} descrip={"Backend developer 2022 - 2023"} imgSrc={"/kuantik.jpg"} alt={"Kuantik Img"} url={"https://www.kuantik.mx/"}/>
            <div className='vl-container'>
                <div class="vl"></div>
            </div>
            <ExpCard name={"Global Smart Business"} descrip={"Fullstack developer 2023 - 2024"} imgSrc={"/gsb.png"} alt={"GSB Img"} url={"https://global-smartb.com/"}/>
            <div className='vl-container'>
                <div class="vl"></div>
            </div>
            <ExpCard name={"Media Aerea"} descrip={"Fullstack developer 2024 - Actualidad"} imgSrc={"/mediaaerea.jpg"} alt={"MediaAerea Img"} url={"https://www.mediaaerea.com.mx/"}/>
        </div>
    )
}