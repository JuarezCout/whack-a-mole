import React, { useState } from "react"
import './Mole.css'

const Mole = ({ hole, onClick }: { hole: number, onClick: (hole: number) => void }) => {

    return (
        <div className="Mole_hole">
            <div className="Mole" onClick={() => onClick(hole)}></div>
            <div className="Hammer"></div>
        </div>
    )
}

export default Mole