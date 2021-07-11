import React, {useState} from 'react';
import './MovieList.css';
import Movie from './Movie';

const MovieList = ({movies, deletee, change}) => {
    const active = movies.filter(movie => movie.active)
    const done = movies.filter(movie => !movie.active)

    const [search, setSearch] = useState('');

    const activeMovies = active.map(movie =>
         <Movie key={movie.id} movie={movie} deletee={deletee} change={change}/>)

    const doneMovies = done.map(movie =>
         <Movie key={movie.id} movie={movie} deletee={deletee}/>)

    const filteredMovies = active.filter(movie => movie.name.toLowerCase().includes(search.toLowerCase()))
         .map(movie => (
         <Movie key={movie.id} movie={movie} deletee={deletee}/>)
         )

    return ( 
        <> 
            <ul className='active'>
                <h1>Movies to watch:</h1>
                <input className="searchBar" placeholder="Search..." value={search}
                onChange={event => setSearch(event.target.value)}></input>
                {search ? filteredMovies : (activeMovies.length ? activeMovies : <p>No more movies to watch.</p>)}
            </ul>

            <hr/>

            <ul className='finished'>
               <h3>Watched movies ({done.length})</h3>
               {doneMovies}
            </ul>
        </>
     );
}
 
export default MovieList;