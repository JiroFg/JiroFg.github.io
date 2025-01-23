import './TechCard.css'

export default function TechCard({name, imgUrl}){
    return(
        <div className='tech-card'>
            <img src={imgUrl} alt={name} />
            <div>{name}</div>
        </div>
    )
}