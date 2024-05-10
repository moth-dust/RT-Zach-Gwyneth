function Moviedetails({updateId, movieDetails}){

    return(
    <article className="movie-details">
    <button id='0' className="exit" onClick={()=>{updateId(0)}}>Back</button>
    </article>)
}

export default Moviedetails