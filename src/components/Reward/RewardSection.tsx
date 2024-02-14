import styles from './reward.module.scss';
import Refer from './Refer';
import Steps from './Steps';

export default function Reward() {
	return (
		<section className={styles.container}>
			<Refer />
			<Steps />
		</section>
	);
}
