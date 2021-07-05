import React, {useState} from 'react';
import './App.css';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

const myMovies = [
  {
    id: 0,
    name: "Pulp Fiction",
    director: "Quentin Tarantino",
    releaseDate: '1994-05-21',
    active: true,
    finishDate: null,
    special: false
  },
  {
    id: 1,
    name: "Jojo Rabbit",
    director: "Taika Waititi",
    releaseDate: '2019-09-08',
    active: true,
    finishDate: null,
    special: false
  },
  {
    id: 2,
    name: "Marriage Story",
    director: "Noah Baumbach",
    releaseDate: '2019-08-29',
    active: true,
    finishDate: null,
    special: false
  },
  {
    id: 3,
    name: "The Favourite",
    director: "Yórgos Lánthimos",
    releaseDate:'2018-08-30',
    active: true,
    finishDate: null,
    special: true
  },
  {
    id: 4,
    name: "Blade Runner 2049",
    director: "Denis Villeneuve",
    releaseDate: '2017-10-03',
    active: true,
    finishDate: null,
    special: false
  },
]

const App = () => {

  const [movies, setMovies] = useState(myMovies);

  const changeMovieStatus = id => {
    //console.log("change " + id);
    setMovies(
      movies.map(item => 
          item.id === id 
          ? {...item, active : false, finishDate : new Date().getTime()} 
          : item 
  ))
   
  }

  const deleteMovie = (id) => {
    //console.log('delete ' + id);
    const newList = movies.filter((item) => item.id !== id);
    setMovies(newList);
  }

  return (
    <>
      <div className='main'>
        <h1>MOVIE MANAGER APP</h1>
        <AddMovie/>
        <MovieList movies = {movies} deletee = {deleteMovie} change={changeMovieStatus}/>
      </div>
    </>
  );
}

export default App;
