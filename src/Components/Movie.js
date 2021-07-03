import React from 'react';
import './Movie.css';

const Movie = ({movie, deletee, change}) => {

    const {name, director, releaseDate, id} = movie;

    return ( 
        <div className='divMovie'>
            <p>
                <strong>{name}</strong>, reż. {director}, (premiera: {releaseDate})
                <button onClick = {() => change(id)} className = 'mbtn'>Obejrzany</button>
                <button onClick = {() => deletee(id)} className = 'mbtn'>X</button>
            </p>
        </div>
     );
}
 
export default Movie;