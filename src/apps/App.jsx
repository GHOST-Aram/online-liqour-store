import React from 'react'
import '../styles/index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import RouteSwitch from './RouteSwitch';
import Header from '../components/Header';
function App() {
  return (
    <div className="App">
		<Header />
        <Router><RouteSwitch /></Router>
    </div>
  );
}

export default App;
