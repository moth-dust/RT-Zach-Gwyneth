import "./Movies.css"
import Card from "../Card/Card";

function Movies({movies, updateId}){
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
        <div className='movies-contaienr'>
            {movieCards}
        </div>
    )
};
export default Movies;