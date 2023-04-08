import react, { useState } from 'react';
import BoxForm from './components/boxform.jsx';
import BoxMaker from './components/boxmaker.jsx'
import './App.css';

function App() {
  const [colors, setColors] = useState([]);
  return (
    <div class = "center">
      <BoxForm setColors={setColors} colors={colors} />
      <BoxMaker colors={colors} />
    </div>
  );
}


export default App;
