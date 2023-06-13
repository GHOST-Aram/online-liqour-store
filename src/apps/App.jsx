import Header from '../components/Header'
import RouteSwitch from './RouteSwitch'
import Footer from '../components/Footer';
import Main from '../components/Main';
function App() {
	return (
		<div className="App container">
			<Header/>
			<Main>
				<RouteSwitch />
			</Main>
			<Footer/>
		</div>
  );
}

export default App;
