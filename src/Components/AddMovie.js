import React, {useState} from 'react';
import './AddMovie.css'

const AddMovie = ({add}) => {

  const today = new Date().toISOString().slice(0,10);
  const minDate = "1888-01-01";
  let maxDate = today.slice(0,4)*1+10;
  maxDate = maxDate+"-12-31";


  const [movieTitle, setMovieTitle] = useState('');
  const [movieDirector, setMovieDirector] = useState('');
  const [isSpecial, setIsSpecial] = useState(false);
  const [releaseDate, setReleaseDate] = useState(today);


  const handleClick = () => {
      if(movieTitle.length>1){
      const ada = add(movieTitle, movieDirector, releaseDate, isSpecial);
      if(ada){
        setMovieTitle('');
        setMovieDirector('');
        setIsSpecial(false);
        setReleaseDate(today);
      }
    }else{
      alert('Podano zbyt krótki tytuł.')
      setMovieTitle('');
    }
  }


    return (
        <div className='form'>
          <div>Podaj dane filmu:</div>
          <input type="text" placeholder = "Wpisz tytuł filmu..." value={movieTitle} 
          onChange={event => setMovieTitle(event.target.value)}></input>
          <input type="text" placeholder = "Wpisz reżysera filmu..." value={movieDirector} 
          onChange={event => setMovieDirector(event.target.value)}></input><br/>
          <input type="checkbox" checked = {isSpecial} id="special" onChange={event => setIsSpecial(event.target.checked)}></input>
          <label className="labelSpec" htmlFor="special">Wyróżnienie</label>
          <label htmlFor="date">Data premiery:</label>
          <input type="date" value={releaseDate} min={minDate} max={maxDate} onChange={event => setReleaseDate(event.target.value)}></input><br/>
          <button onClick={handleClick}>Dodaj</button>
          <hr/>
        </div>
      );
}
 
export default AddMovie;