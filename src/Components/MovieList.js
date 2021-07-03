import React from 'react';
import Movie from './Movie';

const MovieList = ({movies, deletee, change}) => {
    const active = movies.filter(task => task.active)
    const done = movies.filter(task => !task.active)

    const activeMovies = active.map(movie =>
         <Movie key={movie.id} movie={movie} deletee={deletee} change={change}/>)

    const doneMovies = done.map(movie =>
         <Movie key={movie.id} movie={movie} deletee={deletee} change={change}/>)

    return ( 
        <>
            <div className='active'>
                <h1>Filmy do obejrzenia</h1>
                {activeMovies}
            </div>

            <hr/>

            <div className='finished'>
            <h3>Obejrzane filmy (0)</h3>
            {doneMovies}
            </div>
        </>
     );
}
 
export default MovieList;