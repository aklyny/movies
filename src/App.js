import React, { useEffect, useState } from 'react';
import './App.css';
import Movie from './components/movie';

function App() {
  const MOVIE_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=de175849e477bea7bb70d090baa84b9e&page=1'
  const [movies,setMovies] = useState([])

  useEffect(()=>{
    fetch(MOVIE_API)
    .then(data=>data.json())
    .then(movie=>{
      setMovies(movie.results)
    })
  },[])
  console.log(movies)
  return (
    <>
      <header>
      <input
      className="app__search"
      type="text"
      placeholder="search..."
       />
    </header>
    <div className="app">
      {
        movies.length > 0 &&  movies.map(movie=>(
          <Movie {...movie} key={movie.id} />
        ))
      }
    </div>
    </>
  );
}

export default App;
