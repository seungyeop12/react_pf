import Layout from '../../common/layout/Layout';
import { useEffect, useState } from 'react';
const path = process.env.PUBLIC_URL;

export default function Department() {
	console.log('re-render');
	const [Department, setDepartment] = useState([]);
	useEffect(() => {
		fetch(`${path}/DB/department.json`)
			.then((data) => data.json())
			.then((json) => {
				console.log(json.members);
				setDepartment(json.members);
			});
	}, []);
	return (
		<Layout title={'Department'}>
			{Department.map((member, idx) => {
				return (
					<article key={idx}>
						<div className='pic'>
							<img src={`${path}/img/${member.pic}`} alt={member.name} />
						</div>
						<h2>{member.name}</h2>
						<p>{member.position}</p>
					</article>
				);
			})}
		</Layout>
	);
}
