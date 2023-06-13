import React from 'react'
import '../styles/index.css'
import Header from '../components/Header'
import Main from '../components/Main';
import RouteSwitch from './RouteSwitch'
function App() {
  return (
    <div className="App container">
		<Header/>
		<Main><RouteSwitch /></Main>
		
    </div>
  );
}

export default App;
