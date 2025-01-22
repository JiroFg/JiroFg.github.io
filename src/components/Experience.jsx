import ExpCard from './ExpCard';
import './Experience.css'

export default function Experience(){

    return(
        <div className='experience'>
            <h3>Experiencia laboral:</h3>
            <ExpCard imgSrc={"/kuantik.jpg"} alt={"Kuantik Img"} url={"https://www.kuantik.mx/"}/>
            <ExpCard imgSrc={"/gsb.png"} alt={"GSB Img"} url={"https://global-smartb.com/"}/>
            <ExpCard imgSrc={"/mediaaerea.jpg"} alt={"MediaAerea Img"} url={"https://www.mediaaerea.com.mx/"}/>
        </div>
    )
}