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
      if(movieTitle.length>1 && movieDirector.length>1){
      const newMovie = add(movieTitle, movieDirector, releaseDate, isSpecial);
      if(newMovie){
        setMovieTitle('');
        setMovieDirector('');
        setIsSpecial(false);
        setReleaseDate(today);
      }
    }else{
      alert('Zarówno tytuł, jak i reżyser, muszą mieć co najmniej 2 znaki.')
      setMovieTitle('');
      setMovieDirector('');
    }
  }

    return (
        <div className='form'>
          <div>Add movie data:</div>
          <input type="text" placeholder = "Enter movie title..." value={movieTitle} 
          onChange={event => setMovieTitle(event.target.value)}></input>
          <input type="text" placeholder = "Enter movie director..." value={movieDirector} 
          onChange={event => setMovieDirector(event.target.value)}></input><br/>
          <input type="checkbox" checked = {isSpecial} id="special" onChange={event => setIsSpecial(event.target.checked)}></input>
          <label className="labelSpec" htmlFor="special">Mark as special</label>
          <label htmlFor="date">Release date:</label>
          <input type="date" value={releaseDate} min={minDate} max={maxDate} onChange={event => setReleaseDate(event.target.value)}></input><br/>
          <button className='addBtn' onClick={handleClick}>Add movie</button><br/>
          <hr/>
        </div>
      );
}
 
export default AddMovie;