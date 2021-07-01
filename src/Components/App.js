import React, {useState} from 'react';
import './App.css';
import AddMovie from './AddMovie';
import MovieList from './MovieList';


let myMovies = [
  {
    id: 0,
    name: "Pulp Fiction",
    director: "Quentin Tarantino",
    releaseDate: new Date('1994-05-21'),
    active: true,
    finishDate: null
  },
  {
    id: 1,
    name: "Jojo Rabbit",
    director: "Taika Waititi",
    releaseDate: new Date('2019-09-08'),
    active: true,
    finishDate: null
  },
  {
    id: 2,
    name: "Marriage Story",
    director: "Noah Baumbach",
    releaseDate: new Date('2019-08-29'),
    active: true,
    finishDate: null
  },
  {
    id: 3,
    name: "The Favourite",
    director: "Yórgos Lánthimos",
    releaseDate: new Date('2018-08-30'),
    active: true,
    finishDate: null
  },
  {
    id: 4,
    name: "Blade Runner 2049",
    director: "Denis Villeneuve",
    releaseDate: new Date('2017-10-03'),
    active: true,
    finishDate: null
  },
]

//setMovies(searches => [...movies, query])

function App() {

const [movies, setMovies] = useState(myMovies);

  return (
    <>
      <div className='main'>
        <h1>MOVIE MANAGER APP</h1>
        <AddMovie/>
        <MovieList/>
      </div>
    </>
  );
}

export default App;
