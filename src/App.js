import './App.scss';
import React, { useEffect, useState } from 'react'
import { getComic } from './utils/HTTPSrequests';
import StartPicker from 'react-star-picker'
import {FaRandom} from 'react-icons/fa'
function App() {
  const [comic, setComic] = useState({})
  const [rating, setRating] = useState(0)
  const [random, setRandom] = useState(true)
  useEffect(()=>{
    async function getRandomComic(){
      const ramdonComic =  await getComic()
      setComic(ramdonComic)
      setRating(0)
    }
    getRandomComic()
  },[random])

  return (
    <div className="App">
      <header className="App-header">
        <h2 className='title'>{comic.title}</h2>
        <span className='description'>{comic.alt}</span>
        <img className='imageComic' src={comic.img} alt='imageComic'></img>        
        <StartPicker className='rating' name='rating' numberStars={5} size={40} value={rating} onChange={(value)=>setRating(value)}></StartPicker>
        {rating!==0&&<button className='ramdonbt' onClick={()=>setRandom(!random)} title='ramdom'><FaRandom size={30}/></button>}
      </header>
    </div>
  );
}

export default App;
