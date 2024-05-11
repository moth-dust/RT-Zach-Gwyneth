function getMovies(){
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')

}
function getMovie(id){
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies/'+id)
}

export {getMovies, getMovie};