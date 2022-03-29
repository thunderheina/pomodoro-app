import React, { useState } from 'react';
import classes from './Header.module.scss';
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';
import { GiTomato } from 'react-icons/gi';


const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const menuToggleHandler = () => {
		setMenuOpen(p => !p)
	}


	return (
		<header className={classes.header}>
			<nav className={[classes.nav, 'container'].join(' ')}>
				<Link to='/' className={classes.nav__logo}>Pomodoro</Link>

				<div className={`${classes.nav__menu} ${menuOpen ? classes.isMenu : ""}`}>
					<ul className={classes.nav__list}>
						<li className={classes.nav__item}>
							<NavLink className={navLink => navLink.isActive ? classes.nav__link__active : classes.nav__link} to='/about' onClick={menuToggleHandler}>About</NavLink>
						</li>
						<li className={classes.nav__item}>
							<NavLink className={navLink => navLink.isActive ? classes.nav__link__active : classes.nav__link} to='/' onClick={menuToggleHandler}>Timer</NavLink>
						</li>
					</ul>
				</div>

				<GiTomato className={classes.nav__icon} />

				<div class={classes.nav__toggle}>
					{!menuOpen ? <BiMenu onClick={menuToggleHandler} /> : <IoMdClose onClick={menuToggleHandler} />}
				</div>
			</nav>
		</header>
	);
}

export default Header;
