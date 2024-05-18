import { useState, useEffect } from 'react';
import Movies from './Movies/Movies';
import Moviedetails from './Moviedetails/Moviedetails';
import {getMovies, getMovie} from './Api';
import StatusMessage from './StatusMessage';
import './App.css';
import {Routes, Route, useNavigate} from 'react-router-dom';

function App() {
  const [staticMovies, setStaticMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [movies, setMovies] = useState([]);
  const [id, setId] = useState(0);
  const [statusMessage, setStatusMessage] = useState('');
  function updateId(id){
    setId(id);
  };

  function updateLiveSearch(searchQuery){
    const searchResults = staticMovies.filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase()));
    setMovies(searchResults);
    if(!searchResults[0]){
      setMovies([{title: 'Uh oh! No Results.', key:'noresults'}])
    };  
  };

  const navigate = useNavigate();

  useEffect(()=>{
    getMovies()
      .then((response =>{
        if(response.ok){
          return response.json()
        } else {
          throw new Error ('Uh oh! something went wrong, please refresh the page or navigate to home page if issue persists.');
        }}))
      .then(data => {setMovies(data.movies); setStaticMovies(data.movies)})
      .then(navigate('/movies', {replace:true}))
      .catch(error => {
        setStatusMessage(error.toString())
        navigate('/error',{replace: true})
      });
  },[]);

  useEffect(()=>{
    if(id){
    getMovie(id)
      .then((response =>{
        if(response.ok){
        return response.json();
        }else{
          throw new Error ('Uh oh! something went wrong, please refresh the page or navigate to home page if issue persists.');
        }}))
      .then(data => {setMovie(data.movie);})
      .then(navigate(`/${id}`, {replace : true}))
      .catch(error => {
        setStatusMessage(error.toString())
        navigate('/error',{replace: true})});
      };
  },[id]);

  return (
    <main>
      <header id='header'>Rancid Tomatillos</header>
        <div className="center-view">
        <Routes>
          <Route path='/movies' element={<Movies movies = {movies} updateId = {updateId} updateLiveSearch = {updateLiveSearch}/>}/>
          <Route path='/:id' element={<Moviedetails updateId= {updateId} movie = {movie}/>}/>
          <Route path='/error' element={<StatusMessage statusMessage={statusMessage}/>}/>
        </Routes>
        </div>
      <footer>---</footer>
    </main>
  );
};

export default App;
