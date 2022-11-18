import React, { useState, useEffect } from "react";
import { usersFromFirebase } from "../../utils/api/firebaseApi";
import { usersFromSupabase } from "../../utils/api/supabaseApi";

const Home = () => {
	const [data, setData] = useState(null);
	const [persons, setPersons] = useState(null);
	const [loader, setLoader] = useState(false);
	const [loading, setLoading] = useState(false);

	const getSupbaseUsers = async () => {
		const users = await usersFromSupabase();
		setData(users);
		setLoader(false);
	};

	const getFirebaseUsers = async () => {
		const firebaseUsers = await usersFromFirebase();
		setPersons(firebaseUsers);
		setLoading(false);
	};

	useEffect(() => {
		setLoading(true);
		getFirebaseUsers();
	}, []);

	useEffect(() => {
		setLoader(true);
		getSupbaseUsers();
	}, []);

	return (
		<div>
			<h3>This repository is introduction to Supabase</h3>
			<p>Supabase users</p>
			<hr />
			<table>
				<thead>
					<tr>
						<th
							style={{ minWidth: "100px", textAlign: "left", padding: "10px" }}
						>
							Id
						</th>
						<th
							style={{ minWidth: "200px", textAlign: "left", padding: "10px" }}
						>
							Name
						</th>
						<th
							style={{ minWidth: "200px", textAlign: "left", padding: "10px" }}
						>
							Email
						</th>
						<th
							style={{ minWidth: "200px", textAlign: "left", padding: "10px" }}
						>
							Username
						</th>
					</tr>
				</thead>
			</table>
			<hr />
			{!loader && data ? (
				data.map((item) => {
					return (
						<table key={item.id}>
							<tbody style={{ padding: "10px" }}>
								<tr style={{ border: "1px solid black" }}>
									<td style={{ padding: "10px", minWidth: "100px" }}>
										{item.id}
									</td>
									<td style={{ padding: "10px", minWidth: "200px" }}>
										{item.name}
									</td>
									<td style={{ padding: "10px", minWidth: "200px" }}>
										{item.username}
									</td>
									<td style={{ padding: "10px", minWidth: "200px" }}>
										{item.email}
									</td>
								</tr>
							</tbody>
						</table>
					);
				})
			) : (
				<p>Fetching users from supabase</p>
			)}
			<br />
			<p>Firebase users</p>
			<table>
				<thead>
					<tr>
						<th
							style={{ minWidth: "100px", textAlign: "left", padding: "10px" }}
						>
							Id
						</th>
						<th
							style={{ minWidth: "200px", textAlign: "left", padding: "10px" }}
						>
							Name
						</th>
						<th
							style={{ minWidth: "200px", textAlign: "left", padding: "10px" }}
						>
							Email
						</th>
						<th
							style={{ minWidth: "200px", textAlign: "left", padding: "10px" }}
						>
							Username
						</th>
					</tr>
				</thead>
			</table>

			<hr />
			{!loading && persons ? (
				persons.map((item) => (
					<table key={item.id}>
						<tbody style={{ padding: "10px" }}>
							<tr style={{ border: "1px solid black" }}>
								<td style={{ padding: "10px", minWidth: "100px" }}>
									{item.id}
								</td>
								<td style={{ padding: "10px", minWidth: "200px" }}>
									{item.name}
								</td>
								<td style={{ padding: "10px", minWidth: "200px" }}>
									{item.username}
								</td>
								<td style={{ padding: "10px", minWidth: "200px" }}>
									{item.email}
								</td>
							</tr>
						</tbody>
					</table>
				))
			) : (
				<p>Fetching users from firebase</p>
			)}
		</div>
	);
};
export default Home;
