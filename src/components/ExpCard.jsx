import './ExpCard.css'

export default function ExpCard({name, descrip, imgSrc, alt, url}){

    function handleClickCard(url){
        window.open(url, '_blank');
    }

    return(
        <div className='exp-card' onClick={()=>handleClickCard(url)}>
            <img className='exp-img' src={imgSrc} alt={alt} />
            <div>
                <strong>{name}</strong>
                <br />
                <span>{descrip}</span>
            </div>
        </div>
    )
}