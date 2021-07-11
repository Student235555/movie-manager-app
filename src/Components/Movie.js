import React from 'react';
import './Movie.css';

const Movie = ({movie, deletee, change}) => {

    const specialColor = {
        color: 'red'
    }

    const {name, director, releaseDate, id, active, special, finishDate} = movie;

    if(active){
    return ( 
        <li className='liMovie'>
            <p className='oneMovieA'>
                <strong style={special ? specialColor : null}>{name}</strong>, dir. {director}, (release date: {releaseDate})
                <button onClick = {() => change(id)} className = 'mbtn'>Watched</button>
                <button onClick = {() => deletee(id)} className = 'mbtnx'>X</button>
            </p>
        </li>
     );
} else{

    const finish = new Date(finishDate).toLocaleDateString();

    return(
        <li className='liMovie'>
            <p className='oneMovieF'>
                <strong>{name}</strong>, dir. {director}, (release date: {releaseDate}) <br/>
                Movie watched at: <span>{finish}</span>
                <button onClick = {() => deletee(id)} className = 'mbtnx'>X</button>
            </p>
        </li>
    )
}

} 
 
export default Movie;