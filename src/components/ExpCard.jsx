import './ExpCard.css'

export default function ExpCard({imgSrc, alt, url}){

    function handleClickCard(url){
        window.open(url, '_blank');
    }

    return(
        <div className='exp-card' onClick={()=>handleClickCard(url)}>
            <img src={imgSrc} alt={alt} />
            <div>
                <strong>Kuantik</strong>
                <br />
                <span>Backend Developer 2022-2023</span>
            </div>
        </div>
    )
}