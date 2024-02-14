import AppStore from '@/components/AppStore/AppStore';
import Footer from '@/components/Footer/Footer';
import Nav from '@/components/Nav/Nav';
import RewardSection from '@/components/Reward/RewardSection';

export default function Home() {
	return (
		<>
			<Nav />
			<RewardSection />
			<AppStore />
			<Footer />
		</>
	);
}
