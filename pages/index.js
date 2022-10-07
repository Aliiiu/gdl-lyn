import Layout from '../components/Layout/Layout';
import Main from '../components/Pages/Main';
import Topnav from '../components/TopNav/Topnav';
import Topbar from '../components/TopNav/Topbar';

export default function Home() {
	return (
		<div>
			<Layout>
				<Main />
			</Layout>
		</div>
	);
}
