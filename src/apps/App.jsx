import React from 'react'
import '../styles/index.css'
import Header from '../components/Header'
import RouteSwitch from './RouteSwitch'
import Footer from '../components/Footer';
function App() {
  return (
    <div className="App container">
		<Header/>
		<RouteSwitch />
		<Footer/>
    </div>
  );
}

export default App;
