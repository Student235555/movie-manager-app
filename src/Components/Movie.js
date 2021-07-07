import React from 'react';
import './Movie.css';

const Movie = ({movie, deletee, change, edit}) => {

    const specialColor = {
        color: 'red'
    }

    const {name, director, releaseDate, id, active, special, finishDate} = movie;

    if(active){
    return ( 
        <li className='divMovie'>
            <p>
                <strong style={special ? specialColor : null}>{name}</strong>, reż. {director}, (premiera: {releaseDate})
                <button onClick = {() => change(id)} className = 'mbtn'>Obejrzany</button>
                <button onClick = {() => edit(id)} className = 'mbtn'>Edytuj</button>
                <button onClick = {() => deletee(id)} className = 'mbtn'>X</button>
            </p>
        </li>
     );
} else{

    const finish = new Date(finishDate).toLocaleDateString();

    return(
        <li className='divMovie'>
            <p>
                <strong>{name}</strong>, reż. {director}, (premiera: {releaseDate}) <br/>
                Film obejrzano: <span>{finish}</span>
                <button onClick = {() => deletee(id)} className = 'mbtn'>X</button>
            </p>
        </li>
    )
}

} 
 
export default Movie;