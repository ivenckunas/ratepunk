import {FormEvent, useEffect, useRef, useState} from 'react';
import styles from './reward.module.scss';
import successLogo from '../../assets/success.svg';
import {z} from 'zod';
import Image from 'next/image';
import {getEmail} from '@/helpers/getEmail';
import {updateEmail} from '@/helpers/updateEmail';

export default function Refer() {
	const [email, setEmail] = useState<string>('');
	const [placeHolderText, setPlaceHolderText] = useState('Enter your email address');
	const [error, setError] = useState('');
	const [confirmed, setConfirmed] = useState(false);
	const emailSchema = z.string().email().min(5);
	const ref = useRef<HTMLFormElement>(null);

	useEffect(() => {
		getEmail();
	}, []);

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			emailSchema.parse(email);
			setConfirmed(true);
			updateEmail(email);
			setPlaceHolderText('https://ratepunk.com/referral');
			setEmail('');
			setError('');
			ref.current?.reset();
		} catch (error) {
			setError('Email is invalid');
		}
	};

	const copyUrl = () => {
		if (confirmed) navigator.clipboard.writeText('https://ratepunk.com/referral');
	};

	return (
		<div className={styles.referContainer}>
			<h1>refer friends and get rewards</h1>
			<p>Refer your friends to us and earn hotel booking vouchers. We&apos;ll give you 1 coin for each friend that installs our extension. Minimum cash-out at 20 coins.</p>
			<form
				onSubmit={onSubmit}
				ref={ref}
			>
				{confirmed ? (
					<span className={styles.success}>
						<Image
							src={successLogo}
							height={24}
							width={24}
							alt='success green check mark'
						/>
						Your email is confirmed!
					</span>
				) : (
					<span className={styles.error}>{error}</span>
				)}
				<input
					type='email'
					placeholder={placeHolderText}
					onChange={(e) => setEmail(e.currentTarget.value)}
					disabled={confirmed}
				/>
				<button
					type='submit'
					onClick={copyUrl}
				>
					{confirmed ? 'Copy URL' : 'get referral link'}
				</button>
			</form>
			<p>Limits on max rewards apply.</p>
		</div>
	);
}
