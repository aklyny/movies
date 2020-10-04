import React, { useEffect, useState } from 'react';
import './App.css';
import Movie from './components/movie';

function App() {
  const MOVIE_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=de175849e477bea7bb70d090baa84b9e&page=1'
  const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?&api_key=de175849e477bea7bb70d090baa84b9e&query='
  const [movies,setMovies] = useState([])
  const [search,setSearch] = useState('')

  useEffect(()=>{
    fetch(MOVIE_API)
    .then(data=>data.json())
    .then(movie=>{
      setMovies(movie.results)
    })
  },[])
//onSubmit form
  const handleSubmit =(e)=>{
    e.preventDefault()

    if(search){
      fetch(SEARCH_API + search)
      .then(data=>data.json())
      .then(movie=>{
        setMovies(movie.results)
      })
      setSearch('')
    }
  }
  return (
    <>
      <header>
        <form onSubmit={handleSubmit}>
        <input
        className="app__search"
        type="text"
        placeholder="search..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
       />
        </form>
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
