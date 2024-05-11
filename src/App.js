import { useState, useEffect } from 'react';
import {movieMockData, movieDetail} from './movieData';
import Movies from './Movies/Movies';
import Moviedetails from './Moviedetails/Moviedetails';

function App() {
  const [movie, setMovie] = useState({movieDetail});
  const [movies, setMovies] = useState({movieMockData});
  const [focusDetails, setFocusDetails] = useState(false)
  const [focusId, setFocusId] = useState(0)
  function updateId(id){
    setFocusId(id)
  };

  useEffect(()=>{
    focusId ? setFocusDetails(true) : setFocusDetails(false);
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
