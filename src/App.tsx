import React, { useState, useEffect } from 'react';
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
  const [finished, setFinished] = useState(false);
  const [name, setName] = useState("");
  const [score, setScore] = useState(0);
  let holes = document.querySelectorAll('.Mole_hole')
  let lastHole = 0;

  useEffect(() => {
    if (finished) {
      dispatch(updateScoreboard({ playerName: name, score: score }))
    }
  }, [finished])

  const startGame = () => {
    setScore(0)
    setPlaying(true)
    setFinished(false)
    setTimeout(() => {
      holes = document.querySelectorAll('.Mole_hole')
      showRandomMole()
    }, 250);
    setTimeout(() => {
      finishGame()
    }, 30000);
  }

  const finishGame = () => {
    setFinished(true)
    setPlaying(false)
    setName('')
  }

  const cancelGame = () => {
    setPlaying(false)
    setScore(0)
  }

  const hitMole = () => {
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

  const handleNameChange = (event: any) => {
    const playerName: string = event.target.value
    if (playerName.length > 3) return
    setName(playerName.toLocaleUpperCase())
  }

  return (
    <div className="App">
      <Scoreboard />
      <div>
        {!playing ? (
          <>
            <h1>Whack a Mole Game</h1>
            <input onChange={handleNameChange} type="text" value={name} />

            <button onClick={startGame}>Start</button>
          </>
        ) : (
          <div className='Game'>
            <button onClick={cancelGame}>Cancel</button>
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