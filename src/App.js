import Header from './components/common/header/Header';
import { Route } from 'react-router-dom';
import Department from './components/sub/department/Department';
import Youtube from './components/sub/youtube/Youtube';
import './styles/Global.scss';
import Members from './components/sub/members/Members';
import Gallery from './components/sub/gallery/Gallery';
import Contact from './components/sub/contact/Contact';

function App() {
	return (
		<>
			<Header />
			<Route path='/department' component={Department} />
			<Route path='/youtube' component={Youtube} />
			<Route path='/members' component={Members} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/contact' component={Contact} />
		</>
	);
}

export default App;
