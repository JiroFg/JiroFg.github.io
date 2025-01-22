import './TechCard.css'

export default function TechCard({name, imgUrl}){
    return(
        <div className='tech-card'>
            <img src={imgUrl} alt={name} /><strong>{name}</strong>
        </div>
    )
}