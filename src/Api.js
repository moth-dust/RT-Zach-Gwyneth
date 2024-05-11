function getMovies(){
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies').then( response =>{
        if(response.ok){
            response.json()
        } else {
            throw new Error('Oops! Something went wrong.')
        }
    }
    );
}

export default getMovies;