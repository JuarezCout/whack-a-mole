import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Moles from './components/Moles';
import Score from './components/Score';
import Timer from './components/Timer';
import { selectScoreboard } from './redux/gameSlice';

function App() {
  const [playing, setPlaying] = useState(false);

  const scoreboard = useSelector(selectScoreboard())

  const startGame = () => {
    setPlaying(true)
  }

  const finishGame = () => {
    setPlaying(false)
  }

  return (
    <div className="App">
      <div className='Ranking'>
        <h1>Scoreboard</h1>
        <table>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
          {scoreboard.map(score => (
            <tr>
              <td>{score.playerName}</td>
              <td>{score.score}</td>
            </tr>
          ))}
        </table>


      </div>
      <div>
        {!playing ? (
          <>
            <h1>Whack a Mole Game</h1>
            <button onClick={startGame}>Start</button>
          </>
        ) : (
          <div className='Game'>
            <Score />
            <Timer />
            <Moles />
          </div>
        )}
      </div>


    </div>
  );
}

export default App;