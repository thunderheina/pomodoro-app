import React from 'react';
import './AboutPage.scss';

const AboutPage = () => {
	const booksImg = require('./books.jpg');

	return (
		<div className='section container about'>
			<div className='bg bg-r'></div>
			<div className='about__container'>
				<img className='about__img' src={booksImg} alt='books' />
				<div className='about__description'>
					<h2 className='section__title'>Pomodoro Technique</h2>
					<ul className='about__list'>
						<li className='about__item'>Set timer for 25 minutes.</li>
						<li className='about__item'>Work on the task.</li>
						<li className='about__item'>Take a break!</li>
					</ul>

					<p className='about__data'>The Pomodoro Technique is a time management method. It uses a timer to break work into intervals, typically 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro after the tomato-shaped kitchen timer.</p>
				</div>

				<div className='about__slogan'>
					<p>The Pomodoro Technique: <br></br> Powerful and Simple Study Method</p>
				</div>
			</div>
			<div className='bg bg-l'></div>
		</div>
	);
}

export default AboutPage;
