import React from 'react';
import Movie from './Movie';

const MovieList = (props) => {

    const movies = props.movies.map(movie =>
         <Movie key={movie.id} movie={movie} delete={props.delete} change={props.change}/>)

    return ( 
        <>
            <div className='active'>
                <h1>Filmy do obejrzenia</h1>
                {movies}
                
            </div>
            <hr/>
            <div className='finished'>
            <h3>Obejrzane filmy (0)</h3>
            
            </div>
        </>
     );
}
 
export default MovieList;