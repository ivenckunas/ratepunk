import Image from 'next/image';
import styles from './reward.module.scss';
import invite from '../../assets/invite.svg';
import coin from '../../assets/collect-coins.svg';
import voucher from '../../assets/voucher.svg';
import email from '../../assets/email.svg';

export default function Steps() {
	return (
		<div className={styles.cardsContainer}>
			<div className={styles.card}>
				<Image
					src={invite}
					alt='Picture of the RatePunk Email'
				/>
				<div className={styles.cardInfo}>
					<p>Step 1</p>
					<h2>Invite friends</h2>
					<p>Refer friends with your unique referral link.</p>
				</div>
			</div>
			<div className={styles.card}>
				<Image
					src={coin}
					alt='Picture of the RatePunk Email'
				/>
				<div className={styles.cardInfo}>
					<p>Step 2</p>
					<h2>COLLECT COINS</h2>
					<p>Get 1 coin for each friend that installs our extension using your referral link.</p>
				</div>
			</div>
			<div className={styles.card}>
				<Image
					src={voucher}
					alt='Picture of the RatePunk Email'
				/>
				<div className={styles.cardInfo}>
					<p>Step 3</p>
					<h2>GET VOUCHER</h2>
					<p>Redeem for a $20 hotel booking voucher once you collect 20 coins.</p>
				</div>
			</div>
		</div>
	);
}
