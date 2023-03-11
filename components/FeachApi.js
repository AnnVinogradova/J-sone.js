import { useState } from 'react'

export default function FeachAPI() {
	const [user, setUser] = useState([])

	const getApi = () => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((json) => {
				setUser(json);
			})
	}

	return <>
		<div className='table-block'>
			<button onClick={getApi}>Запросить пользователей</button>
			<div>
				<table className='table'>
					<thead>
						<tr>
							<th onClick={() => { sortUser(username) }}>Name</th>
							<th onClick={() => { sortUser(email) }}>Email</th>
							<th onClick={() => { sortUser(address.city) }}>Address</th>
							<th onClick={() => { sortUser(phone) }}>Phone</th>
							<th onClick={() => { sortUser(website) }}>Website</th>
							<th onClick={() => { sortUser(company.name) }}>Company.name</th>
						</tr>
					</thead>
					<tbody>
						{user.map((item) => (
							<tr key={item.id + Math.floor((Math.random() * 999999))}>
								<th>{item.username}</th>
								<th>{item.email}</th>
								<th>{item.address.city}</th>
								<th>{item.phone}</th>
								<th>{item.website}</th>
								<th>{item.company.name}</th>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	</>
}