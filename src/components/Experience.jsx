import './Experience.css'

export default function Experience(){

    function handleClickCard(url){
        window.open(url, '_blank');
    }

    return(
        <div className='experience'>
            <h3>Experiencia laboral:</h3>
            <div className='exp-card' onClick={()=>handleClickCard("https://www.kuantik.mx/")}>
                <img src="/kuantik.jpg" alt="Kuantik Img" />
                <div>
                    <strong>Kuantik</strong>
                    <br />
                    <span>Backend Developer 2022-2023</span>
                </div>
            </div>
            <div className='exp-card' onClick={()=>handleClickCard("https://global-smartb.com/")}>
                <img src="/kuantik.jpg" alt="GSB Img" />
                <div>
                    <strong>Global Smart Business</strong>
                    <br />
                    <span>Fullstack Developer 2023-2024</span>
                </div>
            </div>
            <div className='exp-card' onClick={()=>handleClickCard("https://www.mediaaerea.com.mx/")}>
                <img src="/mediaaerea.jpg" alt="MediaAerea Img" />
                <div>
                    <strong>Media Aerea</strong>
                    <br />
                    <span>Fullstack Developer 2024-2025</span>
                </div>
            </div>
        </div>
    )
}