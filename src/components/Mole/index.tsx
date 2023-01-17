import React, { useState } from "react"
import './Mole.css'

const Mole = () => {

    const [showMole, setShowMole] = useState(false)

    return (
        <>
            {showMole ? (
                <div className="Mole"></div>
            ) : (
                <div className="Mole_hole"></div>
            )}
        </>
    )
}

export default Mole