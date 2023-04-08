import react, { useState } from 'react';
import BoxForm from './boxform.jsx';
import './style.css'


const BoxMaker = ({colors}) => {
    return (
        <div className="center">
            <h1>Your Boxes</h1>
            {colors.map( (color) =><div className="box" style={{backgroundColor: color}}></div>)}
        </div>
    );
};

export default BoxMaker;

