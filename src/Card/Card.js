import "./Card.css";
import PropTypes from 'prop-types';

function Card({poster_path, id, title, average_rating, updateId}){

    return (
        <div className='movie-card'>
            {poster_path?<img alt={`Movie poster for ${title}`} className='card-poster' src={poster_path}/>:<div></div>}
            <ul className='card-info'>
                <li className="title">{title}</li>
                {average_rating?<li>Rating: {average_rating}/10</li>:<li></li>}
            </ul>
            {poster_path?<button className='details' onClick={()=>updateId(id)}>Movie Details ...</button>:<li>Please try adjusting search criteria.</li>}
        </div>
    );
};

export default Card;

Card.propTypes = {
    poster_path: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string,
    average_rating: PropTypes.number,
    updateId: PropTypes.func,
};