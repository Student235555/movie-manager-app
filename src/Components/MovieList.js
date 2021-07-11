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
                <h1>Filmy do obejrzenia</h1>
                <input className="searchBar" placeholder="Wyszukaj..." value={search}
                onChange={event => setSearch(event.target.value)}></input>
                {search ? filteredMovies : (activeMovies.length ? activeMovies : <p>Brak filmów do obejrzenia.</p>)}
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