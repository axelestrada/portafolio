import './styles/main.css';
import './styles/tailwind.css';

import { Provider } from 'react-redux';
import generateStore from './redux/store';

import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import HomeCard from './components/HomeCard';
import AboutCard from "./components/AboutCard";

function App() {
	const store = generateStore();

	return (
		<Provider store={store}>
			<Preloader />
			<Navbar />
			<HomeCard />
			<AboutCard />
		</Provider>
	);
}

export default App;
