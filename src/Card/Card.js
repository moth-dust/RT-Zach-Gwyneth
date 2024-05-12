import "./Card.css"

function Card({poster_path, id, title, average_rating, updateId}){
    return (
        <div className='movie-card'>
            <img alt={`Movie poster for ${title}`} className='card-poster' src={poster_path}/>
            <ul className='card-info'>
                <li>{title}</li>
                <li>Rating: {average_rating.toFixed(1)}/10</li>
            </ul>
            <button className='details' onClick={()=>updateId(id)}>Movie Details</button>
        </div>
    )
}

export default Card