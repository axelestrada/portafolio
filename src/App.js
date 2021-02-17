import './styles/main.css';
import './styles/tailwind.css';

import { Provider } from 'react-redux';
import generateStore from './redux/store';

import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import HomeCard from './components/HomeCard';

function App() {
	const store = generateStore();

	return (
		<Provider store={store}>
			<Preloader />
			<Navbar />
			<HomeCard />
		</Provider>
	);
}

export default App;
