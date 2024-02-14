import styles from './nav.module.scss';
import Image from 'next/image';
import logo from '../../assets/logo.svg';
import menu from '../../assets/menu.svg';

export default function Nav() {
	return (
		<div className={styles.container}>
			<Image
				src={logo}
				alt='Picture of the author'
			/>
			<Image
				src={menu}
				alt='Picture of the author'
			/>
		</div>
	);
}
