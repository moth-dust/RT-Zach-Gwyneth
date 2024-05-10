import { useState, useEffect } from 'react';
import {movieMockData} from './movieData';
import Movies from './Movies/Movies';
import Moviedetails from './Moviedetails/Moviedetails';

function App() {
  const [movies, setMovies] = useState({movieMockData});
  const [focusDetails, setFocusDetails] = useState(false)
  const [focusId, setFocusId] = useState(0)
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
        focusId = {focusId} updateId = {updateId}/*other details array should be passed in here as well, once made */
        />}
        </div>
      <footer>---</footer>
    </main>
  );
};

export default App;
