import Budget from './Budget'
import FormattedDate from './FormattedDate'
import Genres from './Genres'
import './Moviedetails.css'
import PropTypes from 'prop-types'
import {useParams, Link} from 'react-router-dom'
const placeHolderMovie ={

}
function Moviedetails({updateId, movie}){
    const linkId = useParams().id
    if(!movie.title){
    updateId(linkId)
    }
    return(
    <article className="movie-details">
        <img className='poster-large'alt='movie-poster-large' src={movie.backdrop_path}/>
        
        <div className='info-container'>
        <img className='poster-small'alt='movie-poster-small' src={movie.poster_path}/>
            <ul className='info'>
                <li className='title' aria-label='movie-title'>{movie.title}</li>
                <li>{movie.tagline}</li>
                <li className='bold'>Average Rating: {movie.rating? movie.average_rating.toFixed(1):0}/10</li>
                {movie.genres? <Genres genres= {movie.genres}/>:''}
                <li className='details'>Runtime: {movie.runtime} min.</li>
                {movie.budget? <Budget budget= {movie.budget}/>:<li className='details'>No budget available</li>}
                <FormattedDate date = {movie.release_date}/>
                <li className='overview bold'>{movie.overview}</li>        
            </ul>
        </div>
        <Link to='/movies'>
            <button className="exit">{'... '}Back</button> 
        </Link>
    </article>)
};

export default Moviedetails

Moviedetails.propTypes = {
    updateId: PropTypes.func,
    movie: PropTypes.object
}