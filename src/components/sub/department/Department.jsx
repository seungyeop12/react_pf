import Layout from '../../common/layout/Layout';
import { useEffect } from 'react';

export default function Department() {
	useEffect(() => {
		fetch('/DB/department.json')
			.then((data) => data.json())
			.then((json) => {
				console.log(json);
			});
	}, []);
	return (
		<Layout title={'Department'}>
			<p>디파트먼트 페이지입니다.</p>
		</Layout>
	);
}
