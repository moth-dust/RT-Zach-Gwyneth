import { useState, useEffect } from 'react';
import Movies from './Movies/Movies';
import Moviedetails from './Moviedetails/Moviedetails';
import {getMovies, getMovie} from './Api';
import StatusMessage from './StatusMessage';
import './App.css'
import {Routes, Route, useNavigate} from 'react-router-dom'

function App() {
  const [movie, setMovie] = useState({});
  const [movies, setMovies] = useState([]);
  const [id, setId] = useState(0)
  const [statusMessage, setStatusMessage] = useState('Loading... Taking a while? Try refreshing the page.')
  function updateId(id){
    setId(id)
  };

  const navigate = useNavigate()

  useEffect(()=>{
    getMovies()
      .then((response =>{
        if(response.ok){
          return response.json();
        } else {
          throw new Error ('Bad Request');
        }}))
      .then(data => {setMovies(data.movies); setMovie({})})
      .then(navigate('/movies'))
      .catch(error => console.error(error))
  },[]);

  useEffect(()=>{
    getMovie(id)
      .then((response =>{
        if(response.ok){
        return response.json();
        }else{
          throw new Error ('Bad Request');
        }}))
      .then(data => {console.log(data.movie); setMovie(data.movie);})
      .then(()=>{navigate(`/movies/${id}`)})
      .catch(error => console.log(error))
  },[id]);

  return (
    <main>
      <header>Rancid Tomatillos</header>
        <div className="center-view">
        <Routes>
          <Route path='/movies' element={<Movies movies = {movies} updateId = {updateId}/>}/>
          <Route path='/movies/:id' element={<Moviedetails updateId= {updateId} movie = {movie}/>}/>
          <Route path='*' element={<StatusMessage statusMessage={statusMessage}/>}/>
        </Routes>
        </div>
      <footer>---</footer>
    </main>
  );
};

export default App;
