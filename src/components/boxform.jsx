import react, { useState } from 'react';
import './style.css'


const BoxForm = (props) => {
    const [color, setColor] = useState("");
    const {colors, setColors} = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        setColors([...colors, color])
    };

    return (
        <div className="center">
        <form onSubmit={handleSubmit}>
            <h1 className="center">Input Box Color:</h1>
            <input className="center" type="text" name="color" id="color" onChange={(e) => setColor(e.target.value)}value={color}></input>
            <input className="center" type="submit" value="Send Message" />
        </form>
        </div>
    );
};

export default BoxForm;
