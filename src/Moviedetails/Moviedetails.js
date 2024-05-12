import Budget from './Budget'
import FormattedDate from './FormattedDate'
import Genres from './Genres'
import './Moviedetails.css'
function Moviedetails({updateId, movie}){
    return(
    <article className="movie-details">
        <img className='poster-large'alt='movie-poster-large' src={movie.backdrop_path}/>
        
        <div className='info-container'>
        <img className='poster-small'alt='movie-poster-small' src={movie.poster_path}/>
            <ul className='info'>
                <li className='title' aria-label='movie-title'>{movie.title}</li>
                <li>{movie.tagline}</li>
                <li className='bold'>Average Rating: {movie.average_rating.toFixed(1)}/10</li>
                <Genres genres= {movie.genres}/>
                <li className='details'>Runtime: {movie.runtime} min.</li>
                {movie.budget? <Budget budget= {movie.budget}/>:<li className='details'>No budget available</li>}
                <FormattedDate date = {movie.release_date}/>
                <li className='overview bold'>{movie.overview}</li>        
            </ul>
        </div>
        <button id='0' className="exit" onClick={()=>{updateId(0)}}>{'... '}Back</button> 
    </article>)
};

export default Moviedetails
