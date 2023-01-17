import React, { useState } from "react"
import './Mole.css'

const Mole = ({ hole, holesActive, onClick }: { hole: number, holesActive: number[], onClick: (hole: number) => void }) => {

    return (
        <>
            { holesActive.includes(hole) ? (
                <div className="Mole" onClick={() => onClick(hole)}></div>
            ) : (
                <div className="Mole_hole"></div>
            )}
        </>
    )
}

export default Mole