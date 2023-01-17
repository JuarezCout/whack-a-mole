import React, { useState } from 'react';
import './App.css';
import Moles from './components/Moles';
import Score from './components/Score';
import Scoreboard from './components/Scoreboard';
import Timer from './components/Timer';
import { updateScoreboard } from './redux/gameSlice';
import { useAppDispatch } from './redux/hooks';

function App() {
  const dispatch = useAppDispatch()
  const [playing, setPlaying] = useState(false);
  const [score, setScore] = useState(0);
  let holes = document.querySelectorAll('.Mole_hole')

  let lastHole = 0;

  const startGame = () => {
    setScore(0)
    setPlaying(true)
    setTimeout(() => {
      holes = document.querySelectorAll('.Mole_hole')
      showRandomMole()
    }, 250);
    setTimeout(() => {
      finishGame()
    }, 30000);
  }

  const finishGame = () => {    
    dispatch(updateScoreboard({playerName: "123", score: score}))
    setPlaying(false)
  }

  const hitMole = () => {
    console.log(score)
    setScore(score + 50)
  }

  const randomTime = (min: number, max: number) => {
    return Math.round(Math.random() * (max - min) + min);
  }

  const showRandomMole = () => {
    const time = randomTime(1000, 1500);
    const hole = randomHole();

    hole.classList.add('up')
    setTimeout(() => {
      hole.classList.remove('up')
      if (!playing) showRandomMole();
    }, time);
  }

  const randomHole: () => Element = () => {
    const id = Math.floor(Math.random() * 12)
    const hole = holes[id];
    if (id === lastHole) {
      return randomHole();
    }
    lastHole = id;
    return hole;
  }

  return (
    <div className="App">
      <Scoreboard />
      <div>
        {!playing ? (
          <>
            <h1>Whack a Mole Game</h1>
            <button onClick={startGame}>Start</button>
          </>
        ) : (
          <div className='Game'>
            <button onClick={finishGame}>Finish</button>
            <Score score={score} />
            <Timer />
            <Moles onClick={hitMole} />
          </div>
        )}
      </div>


    </div>
  );
}

export default App;