import './styles/main.css';
import './styles/fontawesome/css/all.css';

import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import HomeCard from './components/HomeCard';

function App() {
	return (
		<section className="page">
			<Preloader />
			<Navbar />
			<HomeCard />
		</section>
	);
}

export default App;
