import "./Movies.css"
import Card from "../Card/Card";
import Livesearch from "./Livesearch";


function Movies({movies, updateId}){
    function liveSearch(searchQuery, cardsArray){
        console.log('params', cardsArray, searchQuery)
        const searchResults = cardsArray.filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase()))
        console.log('output', searchResults)
    }
    const movieCards = movies.map(movie => {
        return (
            <Card 
                id={movie.id}
                key={movie.id}
                poster_path={movie.poster_path}
                backdrop_path={movie.backdrop_path}
                title={movie.title}
                average_rating={movie.average_rating}
                release_date={movie.release_date}
                updateId={updateId}
            />
        )
    })
    
    return (
        <div className="movies-and-search-container">
            <Livesearch liveSearch = {liveSearch} movies = {movies}/>
            <div className='movies-container'>
                {movieCards}
            </div>
        </div>
    )
};
export default Movies;