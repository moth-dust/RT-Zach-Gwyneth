import { useState, useEffect } from 'react';
import {movieMockData} from './movieData';
import Movies from './Movies/Movies';
import Moviedetails from './Moviedetails/Moviedetails';

function App() {
  const [movies, setMovies] = useState({movieMockData});
  const [focusDetails, setFocusDetails] = useState(false)
  const [focusId, setFocusId] = useState(0)
  return (
    <main>
      <header>Tomato</header>
        <div class="center-view">
        {!focusDetails ? <Movies /> : <Moviedetails />}

        </div>
      <footer>---</footer>
    </main>
  );
};

export default App;
