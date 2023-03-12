

export default function Table({sortUsers, contactUsers}) {
	return <>
		<div>
			<table className='table'>
				<thead>
					<tr>
						<th onClick={() => { sortUsers('id') }}>Id</th>
						<th onClick={() => { sortUsers('username') }}>Name</th>
						<th onClick={() => { sortUsers('email') }}>Email</th>
						<th onClick={() => { sortUsers('address.city') }}>Address</th>
						<th onClick={() => { sortUsers('phone') }}>Phone</th>
						<th onClick={() => { sortUsers('website') }}>Website</th>
						<th onClick={() => { sortUsers('company.name') }}>Company.name</th>
					</tr>
				</thead>
				<tbody>
					{contactUsers.map((item => (
						<tr key={item.id + Math.floor((Math.random() * 999999))}>
							<th>{item.id}</th>
							<th>{item.username}</th>
							<th>{item.email}</th>
							<th>{item.address.city}</th>
							<th>{item.phone}</th>
							<th>{item.website}</th>
							<th>{item.company.name}</th>
						</tr>
					)))}
				</tbody>
			</table>
		</div>
	</>
}