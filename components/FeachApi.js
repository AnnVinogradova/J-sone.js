import { useState } from 'react'
export default function FeachAPI() {

	const [user, setUser] = useState([])

	const getApi = () => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((json) => {
				console.log(json)
				setUser(json);
			})
	}
	return <>
		<div>
			<button onClick={getApi}>Запросить пользователей</button>
			<div>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Address</th>
							<th>Phone</th>
							<th>Website</th>
							<th>Company.name</th>
						</tr>
					</thead>
					<tbody>
						{user.map((item) =>
							<tr>
								<th>{item.name}</th>
								<th>{item.email}</th>
								<th>{item.address.city}</th>
								<th>{item.phone}</th>
								<th>{item.website}</th>
								<th>{item.company.name}</th>
							</tr>
						)}
					</tbody>

				</table>
			</div>
		</div>
	</>
}