import React from 'react';
import Movie from './Movie';

const MovieList = ({movies, deletee, change}) => {
    const active = movies.filter(movie => movie.active)
    const done = movies.filter(movie => !movie.active)

    const activeMovies = active.map(movie =>
         <Movie key={movie.id} movie={movie} deletee={deletee} change={change}/>)

    const doneMovies = done.map(movie =>
         <Movie key={movie.id} movie={movie} deletee={deletee} change={change}/>)

    return ( 
        <>
            <ul className='active'>
                <h1>Filmy do obejrzenia</h1>
                {activeMovies.length ? activeMovies : <p>Brak filmów do obejrzenia.</p>}
            </ul>

            <hr/>

            <ul className='finished'>
            <h3>Obejrzane filmy ({done.length})</h3>
            {doneMovies}
            </ul>
        </>
     );
}
 
export default MovieList;