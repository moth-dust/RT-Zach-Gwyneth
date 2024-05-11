import { useState, useEffect } from 'react';
import Movies from './Movies/Movies';
import Moviedetails from './Moviedetails/Moviedetails';
import {getMovies, getMovie} from './Api';
import StatusMessage from './StatusMessage';

function App() {
  const [movie, setMovie] = useState({});
  const [movies, setMovies] = useState([]);
  const [focusDetails, setFocusDetails] = useState(false)
  const [focusId, setFocusId] = useState(0)
  const [statusMessage, setStatusMessage] = useState('Loading...')
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
      .then(data => {setMovies(data.movies); setStatusMessage('')})
      .catch(error => setStatusMessage(error))
  },[]);

  useEffect(()=>{
    focusId ? getMovie(focusId)
      .then((response =>{if(response.ok){
        return response.json();
        }else{
          throw new Error ('Oops! Something went wrong! :(');
        }}))
      .then(data => {setMovie(data.movie); setFocusDetails(true)})
      .catch(error => setStatusMessage(error))
    : setFocusDetails(false);
  },[focusId]);
  
  return (
    <main>
      <header>Tomato</header>
        <div className="center-view">
        <StatusMessage
          statusMessage={statusMessage}
        />
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
