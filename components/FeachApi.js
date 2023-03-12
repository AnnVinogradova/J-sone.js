import { useEffect, useState } from 'react'
import axios from 'axios'
import Table from './Table'
export default function FeachAPI() {
	const url = 'https://jsonplaceholder.typicode.com/users'

	const [contactUsers, setContactUsers] = useState([]);
	const [directionSort, setDirectionSort] = useState([]);

	const sortUsers = (field) => {
		const newData = contactUsers.concat();

		let sortUsers;

		if (directionSort) {
			sortUsers = newData.sort(
				(a, b) => { return a[field] > b[field] ? 1 : -1 }
			)
		} sortUsers = newData.reverse(
			(a, b) => { return a[field] > b[field] ? 1 : -1 }
		)

		setContactUsers(sortUsers);
		setDirectionSort(!directionSort);
	}
	useEffect(() => {
		axios.get(url)
			.then(
				(res) => {
					setContactUsers(res.data)
				}
			)
	}, [])

	return <>
		<div className='table-block'>
			<Table contactUsers={contactUsers} sortUsers={sortUsers} />
		</div>
	</>
}

