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
  const [liveSearch, setLiveSearch] = useState('')
  const [statusMessage, setStatusMessage] = useState('Loading... Taking a while? Try refreshing the page.')
  function updateId(id){
    setId(id)
  };

  function updateLiveSearch(searchQuery){
    const searchResults = movies.filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase()))
    setMovies(searchResults)   
  }
  const navigate = useNavigate()

  useEffect(()=>{
    getMovies()
      .then((response =>{
        if(response.ok){
          return response.json();
        } else {
          throw new Error ('Bad Request');
        }}))
      .then(data => {setMovies(data.movies);})
      .then(navigate('/movies'))
      .catch(error => console.error(error))
  },[]);

  useEffect(()=>{
    if(id){
    getMovie(id)
      .then((response =>{
        if(response.ok){
        return response.json();
        }else{
          throw new Error ('Bad Request');
        }}))
      .then(data => {setMovie(data.movie);})
      .then(navigate(`/${id}`, {replace : true}))
      .catch(error => {console.error(error)})
    }
  },[id]);

  return (
    <main>
      <header>Rancid Tomatillos</header>
        <div className="center-view">
        <Routes>
          <Route path='/movies' element={<Movies movies = {movies} updateId = {updateId} updateLiveSearch = {updateLiveSearch}/>}/>
          <Route path='/:id' element={<Moviedetails updateId= {updateId} movie = {movie}/>}/>
          <Route path='*' element={<StatusMessage statusMessage={statusMessage}/>}/>
        </Routes>
        </div>
      <footer>---</footer>
    </main>
  );
};

export default App;
