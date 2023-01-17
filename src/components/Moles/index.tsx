import React, { useState } from 'react';
import Mole from '../Mole';
import "./Moles.css";

const Moles = ({ holesActive, onClick }: { holesActive: number[], onClick: (hole: number) => void }) => {

    return (
        <div className='Moles'>
            <div className='Line'>
                <Mole holesActive={holesActive} hole={1} onClick={onClick} />
                <Mole holesActive={holesActive} hole={2} onClick={onClick} />
                <Mole holesActive={holesActive} hole={3} onClick={onClick} />
                <Mole holesActive={holesActive} hole={4} onClick={onClick} />
            </div>
            <div className='Line'>
                <Mole holesActive={holesActive} hole={5} onClick={onClick} />
                <Mole holesActive={holesActive} hole={6} onClick={onClick} />
                <Mole holesActive={holesActive} hole={7} onClick={onClick} />
                <Mole holesActive={holesActive} hole={8} onClick={onClick} />
            </div>
            <div className='Line'>
                <Mole holesActive={holesActive} hole={9} onClick={onClick} />
                <Mole holesActive={holesActive} hole={10} onClick={onClick} />
                <Mole holesActive={holesActive} hole={11} onClick={onClick} />
                <Mole holesActive={holesActive} hole={12} onClick={onClick} />
            </div>
        </div>
    )
}

export default Moles