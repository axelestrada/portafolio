import './styles/main.css';
import './styles/fontawesome/css/all.css';

import Preloader from './components/Preloader';
import Navbar from './components/Navbar';

function App() {
	return (
		<section className="page">
			<Preloader />
			<Navbar />
		</section>
	);
}

export default App;
