import React, { useState } from 'react';
import './App.css';

function App(props) {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
     {props.message.length > 10
        ? <p>Too long</p>
        : <p>{props.message}</p>
      }
      
      {count <= 10 
        ? <p>You have pressed the button {count} times</p> 
        : <p>You have pressed the button more than 10 times</p>
      }
      <button onClick={() => setCount(count + 1)} id="btn">+</button>
      <button onClick={() => setCount(count - 1)} id="btn">-</button>
      <button onClick={() => setCount(0)} id="btn">Clear</button>
    </div>
  );
}

export default App;
