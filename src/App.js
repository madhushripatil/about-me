import React from 'react';
import './App.css';

const Title = ({children}) => {
    return <h1>{children}</h1>;
}

const Subtitle = ({children}) => {
    return <label>{children}</label>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Title children='Madhushri Patil' />
          <Subtitle children='Learning react' />
      </header>
    </div>
  );
}

export default App;
