import './Moviedetails.css'
function Moviedetails({updateId, movie}){
    const _movie = movie.movieDetail.movie
    console.log(_movie)
    return(
    <article className="movie-details">
        <button id='0' className="exit" onClick={()=>{updateId(0)}}>Back</button> 
        <img className=""src="https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg"/>
        <ul className='info'>
            <li className='title' aria-label='movie-title'>{_movie.title}</li>
            <li>{_movie.tagline}</li>
            <li className='bold'>Average Rating: {_movie.average_rating}</li>
            <li className='bold'>{_movie.genres}</li>
            <li>Runtime: {_movie.runtime}</li>
            <li>Budget: {_movie.budget}</li>
            <li>{_movie.overview}</li>
            <li>{_movie.release_date}</li>
        </ul>
    </article>)
}

export default Moviedetails
/* average_rating
: 
6
backdrop_path
: 
"https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg"
budget
: 
63000000
genres
: 
['Drama']
id
: 
1
overview
: 
"Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!"
poster_path
: 
"https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg"
release_date
: 
"2019-12-04"
revenue
: 
100853753
runtime
: 
139
tagline
: 
"It's a movie!"
title
: 
"Fake Movie Title"
[[Prototype]]
: 
Object
*/