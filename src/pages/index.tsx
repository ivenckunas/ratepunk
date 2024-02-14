import AppStore from '@/components/AppStore/AppStore';
import Nav from '@/components/Nav/Nav';
import Reward from '@/components/Reward/Reward';

export default function Home() {
	return (
		<>
			<Nav />
			<Reward />
			<AppStore />
		</>
	);
}
