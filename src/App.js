import { useState, useEffect } from 'react';
import {movieMockData, movieDetail} from './movieData';
import Movies from './Movies/Movies';
import Moviedetails from './Moviedetails/Moviedetails';
import {getMovies, getMovie} from './Api';

function App() {
  const [movie, setMovie] = useState({});
  const [movies, setMovies] = useState(movieMockData.movies);
  const [focusDetails, setFocusDetails] = useState(false)
  const [focusId, setFocusId] = useState(0)
  function updateId(id){
    setFocusId(id)
  };

  useEffect(()=>{
    getMovies()
      .then((response =>{
        if(response.ok){
          return response.json();
        } else {
          throw new Error ('Oops! Something went wrong! :(');
        }}))
      .then(data => {setMovies(data.movies);})
      .catch(error => console.error(error))
  },[]);

  useEffect(()=>{
    focusId ? getMovie(focusId)
    .then((response =>{if(response.ok){
      return response.json();
      }else{
        throw new Error ('Oops! Something went wrong! :(');
      }}))
    .then(data => {setMovie(data.movie); setFocusDetails(true)})
    .catch(error => console.error(error))
    : setFocusDetails(false);
  },[focusId]);
  
  return (
    <main>
      <header>Tomato</header>
        <div className="center-view">
        {!focusDetails ? <Movies
         movies = {movies} updateId = {updateId}
        /> : <Moviedetails 
        updateId = {updateId} movie = {movie}
        />}
        </div>
      <footer>---</footer>
    </main>
  );
};

export default App;
