import Budget from './Budget'
import FormattedDate from './FormattedDate'
import Genres from './Genres'
import './Moviedetails.css'
import PropTypes from 'prop-types'

function Moviedetails({updateId, movie}){
    return(
    <article className="movie-details">
        <button id='0' className="exit" onClick={()=>{updateId(0)}}>Back</button> 
        <img alt='movie-poster-large' src={movie.backdrop_path}/>
        <img alt='movie-poster-small' src={movie.poster_path}/>
        <ul className='info'>
            <li className='title' aria-label='movie-title'>{movie.title}</li>
            <li>{movie.tagline}</li>
            <li className='bold'>Average Rating: {movie.average_rating}</li>
            <Genres genres= {movie.genres}/>
            <li>Runtime: {movie.runtime} min.</li>
            <Budget budget= {movie.budget}/>
            <FormattedDate date = {movie.release_date}/>
            <li>{movie.overview}</li>
            
        </ul>
    </article>)
};

export default Moviedetails

Moviedetails.propTypes = {
    updateId: PropTypes.func,
    movie: PropTypes.object
}