import React, {useState} from 'react';
import './App.css';
import AddMovie from './AddMovie';
import MovieList from './MovieList';


//setMovies(searches => [...movies, query])

const myMovies = [
  {
    id: 0,
    name: "Pulp Fiction",
    director: "Quentin Tarantino",
    releaseDate: '1994-05-21',
    active: true,
    finishDate: null
  },
  {
    id: 1,
    name: "Jojo Rabbit",
    director: "Taika Waititi",
    releaseDate: '2019-09-08',
    active: true,
    finishDate: null
  },
  {
    id: 2,
    name: "Marriage Story",
    director: "Noah Baumbach",
    releaseDate: '2019-08-29',
    active: true,
    finishDate: null
  },
  {
    id: 3,
    name: "The Favourite",
    director: "Yórgos Lánthimos",
    releaseDate:'2018-08-30',
    active: true,
    finishDate: null
  },
  {
    id: 4,
    name: "Blade Runner 2049",
    director: "Denis Villeneuve",
    releaseDate: '2017-10-03',
    active: true,
    finishDate: null
  },
]

const changeMovieStatus = (id) => {
  console.log("change" + id)
}


const App = () => {

  const [movies, setMovies] = useState(myMovies);

  const deleteMovie = (id) => {

    console.log(id)
    
    const newList = movies.filter((item) => item.id !== id);
 
    setMovies(newList);
  }

  return (
    <>
      <div className='main'>
        <h2>MOVIE MANAGER APP</h2>
        <AddMovie/>
        <MovieList movies = {movies} delete = {deleteMovie} change={changeMovieStatus}/>
      </div>
    </>
  );
}

export default App;
