import Topbar from '../components/TopNav/Topbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Topbar />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
