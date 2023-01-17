import React from 'react'
import { useSelector } from 'react-redux'
import { selectScoreboard } from '../../redux/gameSlice'
import './Scoreboard.css'

const Scoreboard = () => {
    const scoreboard = useSelector(selectScoreboard())

    return (
        <div className='Ranking'>
            <h2>Scoreboard</h2>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Score</td>
                    </tr>
                </thead>
                <tbody>
                    {scoreboard.slice(0,10).map((score, index) => (
                        <tr key={index}>
                            <td>{score.playerName}</td>
                            <td>{score.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Scoreboard