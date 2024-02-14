import AppStore from '@/components/AppStore/AppStore';
import Footer from '@/components/Footer/Footer';
import Nav from '@/components/Nav/Nav';
import Reward from '@/components/Reward/Reward';

export default function Home() {
	return (
		<>
			<Nav />
			<Reward />
			<AppStore />
			<Footer />
		</>
	);
}
