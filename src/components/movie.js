import React from 'react';
import './movie.css';

const Movie = ({title,poster_path,vote_average,overview})=>{
    const IMG_API = 'https://image.tmdb.org/t/p/w1280'
    return(
        <div className="movie">
            <img src={`${IMG_API}/${poster_path}`} alt={title} />
            <div className="movie__info">
                <h3>{title}</h3>
                <span>{vote_average}/10</span>
            </div>
            <div className="movie__over">
                <h3>Overview</h3>
                <p>
                    {overview}
                </p>
            </div>
         </div>
    )
}


export default Movie;