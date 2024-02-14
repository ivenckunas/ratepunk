import styles from './appStore.module.scss';
import Image from 'next/image';
import chrome from '../../assets/chrome.svg';
import apple from '../../assets/apple.svg';

export default function AppStore() {
	return (
		<div className={styles.container}>
			<div className={styles.storeCard}>
				<Image
					src={chrome}
					height={48}
					alt='chrome web store'
				/>
				<div>
					<p>available in the</p>
					<p>chrome web store</p>
				</div>
			</div>
			<div className={styles.storeCard}>
				<Image
					src={apple}
					height={48}
					alt='apple app store'
				/>
				<div>
					<p>available in the</p>
					<p>apple app store</p>
				</div>
			</div>
			<p>
				<span>&#9733;&#9733;&#9733;&#9733;&#9733;</span> Chrome Store reviews
			</p>
		</div>
	);
}
