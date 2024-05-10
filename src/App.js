import { useState, useEffect } from 'react';
import {movieMockData, movieDetail} from './movieData';
import Movies from './Movies/Movies';
import Moviedetails from './Moviedetails/Moviedetails';

function App() {
  const [movieDetails, setMovieDetails] = useState({movieDetail});
  const [movies, setMovies] = useState({movieMockData});
  const [focusDetails, setFocusDetails] = useState(false)
  const [focusId, setFocusId] = useState(1)
  function updateId(id){
    setFocusId(id)
  };
  /*This hook listens for a change in focusId (the invocation of updateId),
  and toggles the focusDetails state. I did this so that we wouldn't have to write and pass in a updateFocusId function, 
  just the updateId function. Updating the id to 0 changes focusDetails back to false */
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
        focusId = {focusId} updateId = {updateId} movieDetails = {movieDetails}
        />}
        </div>
      <footer>---</footer>
    </main>
  );
};

export default App;
