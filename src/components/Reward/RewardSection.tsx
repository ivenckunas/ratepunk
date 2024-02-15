import styles from './reward.module.scss';
import Refer from './Refer';
import Steps from './Steps';

export default function Reward() {
	return (
		<div className={styles.container}>
			<div className={styles.rewardContainer}>
				<Refer />
				<Steps />
			</div>
		</div>
	);
}
