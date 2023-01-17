import React from 'react';
import Mole from '../Mole';
import "./Moles.css";

const Moles = ({ onClick }: {onClick: (hole: number) => void }) => {

    return (
        <div className='Moles'>
            <div className='Line'>
                <Mole hole={1} onClick={onClick} />
                <Mole hole={2} onClick={onClick} />
                <Mole hole={3} onClick={onClick} />
                <Mole hole={4} onClick={onClick} />
            </div>
            <div className='Line'>
                <Mole hole={5} onClick={onClick} />
                <Mole hole={6} onClick={onClick} />
                <Mole hole={7} onClick={onClick} />
                <Mole hole={8} onClick={onClick} />
            </div>
            <div className='Line'>
                <Mole hole={9} onClick={onClick} />
                <Mole hole={10} onClick={onClick} />
                <Mole hole={11} onClick={onClick} />
                <Mole hole={12} onClick={onClick} />
            </div>
        </div>
    )
}

export default Moles