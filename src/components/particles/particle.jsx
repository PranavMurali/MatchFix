
import React from 'react';
import Particles from 'react-particles-js';
import particlesConfig from './particles';

function Particle() {
return (
    <div className="App" style={{ position: 'relative', overflow: "hidden" }}>
    <div style={{ position: 'absolute'}}>
      <Particles height="100vh" width="100vw" params={particlesConfig} />
    </div>
    <header className="App-header">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);
}

export default Particle;