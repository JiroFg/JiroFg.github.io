import ExpCard from './ExpCard';
import './Experience.css'

export default function Experience(){

    return(
        <div className='experience'>
            <h3>Experiencia laboral:</h3>
            <ExpCard name={"Kuantik"} descrip={"Backend developer 2022-2023"} imgSrc={"/kuantik.jpg"} alt={"Kuantik Img"} url={"https://www.kuantik.mx/"}/>
            <ExpCard name={"Global Smart Business"} descrip={"Fullstack developer 2023-2024"} imgSrc={"/gsb.png"} alt={"GSB Img"} url={"https://global-smartb.com/"}/>
            <ExpCard name={"Media Aerea"} descrip={"Fullstack developer 2024-2025"} imgSrc={"/mediaaerea.jpg"} alt={"MediaAerea Img"} url={"https://www.mediaaerea.com.mx/"}/>
        </div>
    )
}