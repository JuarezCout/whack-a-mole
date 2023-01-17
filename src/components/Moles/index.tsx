import React, { useState } from 'react';
import Mole from '../Mole';
import "./Moles.css";

const Moles = () => {

    return (
    <div className='Moles'>
        <div className='Line'>
            <Mole />
            <Mole />
            <Mole />
            <Mole />
        </div>
        <div className='Line'>
            <Mole />
            <Mole />
            <Mole />
            <Mole />
        </div>
        <div className='Line'>
            <Mole />
            <Mole />
            <Mole />
            <Mole />
        </div>
    </div>
    )
}

export default Moles