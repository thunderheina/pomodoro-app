import AboutPage from './AboutPage/AboutPage';
import { Routes, Route } from 'react-router-dom';
import TimerPage from './TimerPage/TimerPage';

function Main() {
	return (
		<main className='container'>
			<Routes>
				<Route path='/about' element={<AboutPage />} />
				<Route path='/' element={<TimerPage />} />
			</Routes>
		</main>
	);
}

export default Main;