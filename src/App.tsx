import React, { useState } from 'react';
import './App.css';
import Moles from './components/Moles';
import Score from './components/Score';
import Scoreboard from './components/Scoreboard';
import Timer from './components/Timer';

function App() {
  const [playing, setPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [holeActive, setHoleActive] = useState<number>(0);
  const [holes, setHoles] = useState<number[]>([]);

  let lastHole = 0;

  const startGame = () => {
    setScore(0)
    setPlaying(true)
    showRandomMole()
    setTimeout(() => {
      setPlaying(false)
    }, 30000);
  }

  const finishGame = () => {
    setPlaying(false)
  }

  const hitMole = (hole: number) => {
    setScore(score + 10)
  }

  const randomTime = (min: number, max: number) => {
    return Math.round(Math.random() * (max - min) + min);
  }

  const showRandomMole = () => {
    // console.log(holes)
    const time = randomTime(500, 1000);
    const hole = randomHole();

    let newHoles = holes;
    newHoles.push(hole);
    setHoles(newHoles);

    setTimeout(() => {
      let newHoles = holes;
      newHoles.filter(i => i !== hole);
      setHoles(newHoles);
      setTimeout(() => {
        if (!playing) showRandomMole();
      }, 500);
    }, time);
  }

  const randomHole: () => number = () => {
    const hole = Math.floor(Math.random() * 12);
    if (hole === lastHole) {
      return randomHole();
    }
    lastHole = hole;
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
            <Moles holesActive={holes} onClick={hitMole} />
          </div>
        )}
      </div>


    </div>
  );
}

export default App;