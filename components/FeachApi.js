import { useEffect, useState } from 'react'
import axios from 'axios'
import Table from './Table'
export default function FeachAPI() {
	const url = 'https://jsonplaceholder.typicode.com/users'

	const [contactUsers, setcontactUsers] = useState([])

	const sortUsers = (field) => {
		console.log(field)
	}
	useEffect(() => {
		axios.get(url)
			.then(
				(res) => {
					console.log(res)
					setcontactUsers(res.data)
				}
			)
	}, [])

	return <>
		<div className='table-block'>
			<Table contactUsers={contactUsers} sortUsers={sortUsers} />
		</div>
	</>
}

