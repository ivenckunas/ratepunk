import Image from 'next/image';
import styles from './footer.module.scss';
import logo from '../../assets/logo.svg';
import email from '../../assets/email-footer.svg';
import ig from '../../assets/instagram.svg';
import fb from '../../assets/facebook.svg';
import linkedin from '../../assets/linkedin.svg';
import twitter from '../../assets/twitter.svg';
import tiktok from '../../assets/tiktok.svg';

export default function Footer() {
	return (
		<div className={styles.footerContainer}>
			<div className={styles.about}>
				<a
					href='https://www.ratepunk.com'
					target='_blank'
				>
					<Image
						src={logo}
						alt='RatePunk logo'
					/>
				</a>
				<p>Ratepunk compares hotel room prices across the major online travel agencies. When you search for a room, Ratepunk extension scans the top booking sites and runs a price comparison, so you can be confident in knowing you’re getting the best deal!</p>
			</div>
			<div className={styles.links}>
				<h2>QUICK LINKS</h2>
				<ul>
					<li>Price Comparison</li>
					<li>Chrome Extension</li>
					<li>How It Works</li>
					<li>Ratepunk Blog</li>
					<li>Privacy Policy</li>
				</ul>
			</div>
			<div className={styles.contact}>
				<h2>CONTACT</h2>
				<a href='mailto: hi@ratepunk.com'>
					<Image
						src={email}
						alt=''
						height={16}
						width={16}
					/>
					<p>hi@ratepunk.com</p>
				</a>
			</div>
			<div className={styles.social}>
				<h2>SOCIAL</h2>
				<section>
					<Image
						src={ig}
						alt=''
						height={16}
						width={16}
					/>

					<Image
						src={fb}
						alt=''
						height={16}
						width={16}
					/>

					<Image
						src={linkedin}
						alt=''
						height={16}
						width={16}
					/>

					<Image
						src={twitter}
						alt=''
						height={16}
						width={16}
					/>

					<Image
						src={tiktok}
						alt=''
						height={16}
						width={16}
					/>
				</section>
			</div>
			<p className={styles.copyright}>© 2021 Ratepunk. All Rights Reserved.</p>
		</div>
	);
}
