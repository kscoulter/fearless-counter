

import React, { useState, useEffect } from "react";
import axios from 'axios';
import './App.css';
import Button from './components/Button';
import CountDisplay from './components/CountDisplay';

// not a secret
export const key = '1ccb732e-b55a-4404-ad3f-0f99c02fe44e'
export const namespace = 'fearless.tech'

const App = () => {
  const [fearlessCounter, setFearlessCounter] = useState()

  // equivalent of component did mount
  useEffect(() => {
    getCount()
  }, [])

  // I could use variables for 'hit' or 'get' actions as well,
  // but the new fuction would serve two different purposes and be harder to read
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
