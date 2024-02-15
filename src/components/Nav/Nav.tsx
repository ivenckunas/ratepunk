import styles from './nav.module.scss';
import Image from 'next/image';
import logo from '../../assets/logo.svg';
import menu from '../../assets/menu.svg';
import close from '../../assets/close.svg';
import {useState} from 'react';

export default function Nav() {
	const [burgerOpen, setBurgerOpen] = useState(false);

	const toggleBurger = () => {
		setBurgerOpen(!burgerOpen);
	};

	return (
		<div className={styles.container}>
			<a
				href='https://www.ratepunk.com'
				target='_blank'
			>
				<Image
					src={logo}
					alt='RatePunk logo'
				/>
			</a>
			{burgerOpen ? (
				<Image
					className={styles.close}
					onClick={toggleBurger}
					src={close}
					alt='RatePunk logo'
				/>
			) : (
				<Image
					className={styles.burger}
					onClick={toggleBurger}
					src={menu}
					alt='burger menu'
				/>
			)}

			<ul className={burgerOpen ? styles.mobileList : ''}>
				<li>Chrome Extension</li>
				<li>Price Comparison</li>
				<li>Blog</li>
			</ul>
		</div>
	);
}
