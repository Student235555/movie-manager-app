import React from 'react';
import Movie from './Movie';

const MovieList = () => {
    return ( 
        <div>
            <h2>Lista filmów</h2>
            <Movie/>
            <Movie/>
            <Movie/>
        </div>
     );
}
 
export default MovieList;