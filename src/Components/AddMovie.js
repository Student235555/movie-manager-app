import React, {useState} from 'react';
import './AddMovie.css'

const AddMovie = () => {

  const [movieTitle, setMovieTitle] = useState('');
  const [movieDirector, setMovieDirector] = useState('');
  const [isSpecial, setIsSpecial] = useState(false);
  const [releaseDate, setReleaseDate] = useState('2021-07-05');

    return (
        <div className='form'>
          <div>Podaj dane filmu:</div>
          <input type="text" placeholder = "Wpisz tytuł filmu..." value={movieTitle}></input>
          <input type="text" placeholder = "Wpisz reżysera filmu..." value={movieDirector}></input><br/>
          <input type="checkbox" checked = {isSpecial} id="special"></input>
          <label className="labelSpec" htmlFor="special">Wyróżnienie</label>
          <label htmlFor="date">Data premiery:</label>
          <input type="date" value={releaseDate} min="1888-01-01" max="2050-01-01"></input><br/>
          <button>Dodaj</button>
          <hr/>
        </div>
      );
}
 
export default AddMovie;