import './styles/main.css';
import './styles/tailwind.css';

import { Provider } from 'react-redux';
import generateStore from './redux/store';

import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import HomeCard from './components/HomeCard';
import AboutCard from './components/AboutCard';
import ServicesCard from './components/ServicesCard';
import SkillsCard from './components/SkillsCard';
import WorksCard from './components/WorksCard';
import ContactCard from './components/ContactCard';

function App() {
	const store = generateStore();

	return (
		<Provider store={store}>
			<div className="flex justify-center items-center flex-col md:items-center md:h-screen">
				<Preloader />
				<div className="md:relative md:w-full md:pt-20 lg:w-100">
					<Navbar />
					<HomeCard />
					<div className="info md:pl-2 bg-none md:rounded md:bg-backgroundMain md:overflow-y-scroll md:absolute md:right-1.5 md:top-1/2 md:transform md:-translate-y-1/2 md:mt-10 md:w-7/12 lg:w-99 md:h-97 lg:h-100">
						<AboutCard />
						<ServicesCard />
						<SkillsCard />
						<WorksCard />
						<ContactCard />
					</div>
				</div>
			</div>
		</Provider>
	);
}

export default App;
