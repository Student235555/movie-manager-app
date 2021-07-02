import React from 'react';
import './Movie.css';

const Movie = (props) => {

    const {name, director, releaseDate, id} = props.movie;
    return ( 
        <div className='divMovie'>
            <p>
                <strong>{name}</strong>, reż. {director}, (premiera: {releaseDate})
                <button onClick = {() => props.change(id)} className = 'mbtn'>Obejarzny</button>
                <button onClick = {() => props.delete(id)} className = 'mbtn'>X</button>

            </p>
        </div>
     );
}
 
export default Movie;