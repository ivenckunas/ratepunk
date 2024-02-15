import styles from './nav.module.scss';
import Image from 'next/image';
import logo from '../../assets/logo.svg';
import menu from '../../assets/menu.svg';
import close from '../../assets/close.svg';
import {useState} from 'react';

export default function Nav() {
	const [showBurger, setShowBurger] = useState(false);

	const handleBurgerClick = () => {
		setShowBurger(!showBurger);
	};

	return (
		<div className={styles.container}>
			<Image
				src={logo}
				alt='RatePunk logo'
			/>
			<Image
				onClick={handleBurgerClick}
				src={menu}
				alt='burger menu'
			/>
			<div className={showBurger ? styles.menuShow : styles.menuHide}>
				<div className={styles.menuHeader}>
					<Image
						src={logo}
						alt='RatePunk logo'
					/>
					<Image
						onClick={() => setShowBurger(false)}
						src={close}
						alt='RatePunk logo'
					/>
				</div>
				<ul>
					<li>Chrome extension</li>
					<li>Price Comparison</li>
					<li>Blog</li>
				</ul>
			</div>
		</div>
	);
}
