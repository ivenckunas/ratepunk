import styles from './appStore.module.scss';
import Image from 'next/image';
import chrome from '../../assets/chrome.svg';
import apple from '../../assets/apple.svg';

export default function AppStore() {
	return (
		<div className={styles.container}>
			<div className={styles.storeContainer}>
				<div className={styles.storeCard}>
					<a
						href='https://chromewebstore.google.com/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?pli=1'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Image
							src={chrome}
							height={48}
							alt='chrome web store'
						/>
						<section>
							<p>available in the</p>
							<p>chrome web store</p>
						</section>
					</a>
				</div>
				<div className={styles.storeCard}>
					<a
						href='https://apps.apple.com/app/ratepunk/id1607823726]'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Image
							src={apple}
							height={48}
							alt='apple app store'
						/>
						<section>
							<p>available in the</p>
							<p>apple app store</p>
						</section>
					</a>
				</div>
				<p>
					<span>&#9733;&#9733;&#9733;&#9733;&#9733;</span> Chrome Store reviews
				</p>
			</div>
		</div>
	);
}
