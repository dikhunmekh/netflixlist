import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <div className="container">
      <button className="btn btn-success m-2">Bootstrap Button</button>
      <button className="btn btn-outline-success">Bootstrap Outline Button</button>
      <div className="card" width="18rem">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="https://www.google.co.in" className="card-link">Card link</a>
        <a href="https://www.google.co.in" className="card-link">Another link</a>
      </div>
    </div>
    </div>
  );
}

export default App;
