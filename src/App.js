import Header from './components/common/header/Header';
import { Route } from 'react-router-dom';
import Department from './components/sub/department/Department';
import Youtube from './components/sub/youtube/Youtube';
import './styles/Global.scss';

function App() {
	return (
		<>
			<Header />
			<Route path='/department'>
				<Department />
			</Route>
			<Route path='/youtube'>
				<Youtube />
			</Route>
		</>
	);
}

export default App;
