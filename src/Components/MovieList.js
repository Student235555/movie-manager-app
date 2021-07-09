import React, {useState} from 'react';
import Movie from './Movie';

const MovieList = ({movies, deletee, change, edit}) => {
    const active = movies.filter(movie => movie.active)
    const done = movies.filter(movie => !movie.active)

    const [search, setSearch] = useState('');

    const activeMovies = active.map(movie =>
         <Movie key={movie.id} movie={movie} deletee={deletee} change={change} edit={edit}/>)

    const doneMovies = done.map(movie =>
         <Movie key={movie.id} movie={movie} deletee={deletee}/>)

    const filteredMovies = active.filter(li => li.name.toLowerCase().includes(search.toLowerCase()))
         .map(movie => (
         <Movie key={movie.id} movie={movie} deletee={deletee}/>)
         )

    return ( 
        <>
             <input className="searchBar" placeholder="Wyszukaj..." value={search}
          onChange={event => setSearch(event.target.value)}></input>

            <ul className='active'>
                <h1>Filmy do obejrzenia</h1>
                {activeMovies.length ? activeMovies : <p>Brak filmów do obejrzenia.</p>}
            </ul>

            <hr/>

            <ul className='filtered'>
                <h1>Filmy Wyszukane</h1>
                {search ? filteredMovies : ''}
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