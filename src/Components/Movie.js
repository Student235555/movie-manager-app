import React from 'react';
import './Movie.css';

const Movie = ({movie, deletee, change}) => {

    const {name, director, releaseDate, id} = movie;

    return ( 
        <li className='divMovie'>
            <p>
                <strong>{name}</strong>, reż. {director}, (premiera: {releaseDate})
                <button onClick = {() => change(id)} className = 'mbtn'>Obejrzany</button>
                <button onClick = {() => deletee(id)} className = 'mbtn'>X</button>
            </p>
        </li>
     );
}
 
export default Movie;