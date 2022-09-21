

import React, { useState, useEffect } from "react";
import axios from 'axios';
import './App.css';
import Button from './components/Button';
import CountDisplay from './components/CountDisplay';

// not a secret
const key = '1ccb732e-b55a-4404-ad3f-0f99c02fe44e'
const namespace = 'fearless.tech'

const App = () => {
  const [fearlessCounter, setFearlessCounter] = useState(1)

  useEffect(() => {
    getCount()
  }, [])

  const getCount = () => {
    axios
      .get(`https://api.countapi.xyz/get/${namespace}/${key}`)
      .then((res) => {
        setFearlessCounter(res.data.value)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  
  const incrementCount = () => {
    axios
      .get(`https://api.countapi.xyz/hit/${namespace}/${key}`)
      .then((res) => {
        setFearlessCounter(res.data.value)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <CountDisplay count={fearlessCounter} />
        <Button text="click me" onClick={incrementCount}/>
      </header>
    </div>
  );
}

export default App;
