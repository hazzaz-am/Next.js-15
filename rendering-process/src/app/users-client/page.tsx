"use client";

import { useEffect, useState } from "react";

type User = {
	id: number;
	name: string;
	usernmae: string;
	email: string;
	phone: string;
};

export default function UsersClient() {
	const [users, setUsers] = useState<User[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		async function fetchUsers() {
			try {
				const response = await fetch(
					"https://jsonplaceholder.typicode.com/users"
				);
				if (!response.ok) {
					throw new Error("Failed to fetch");
				}
				const data = await response.json();
				setUsers(data);
			} catch (error) {
				if (error instanceof Error) {
					setError(error.message);
				} else {
					setError("An unKnown error occurred");
				}
			} finally {
				setLoading(false);
			}
		}

		fetchUsers();
	}, []);

	if (loading) {
		return <p>Loading......</p>;
	}

	if (error) {
		return <p>{error}</p>;
	}

	return (
		<ul className="space-y-4 p-4">
			{users.map((user) => (
				<li
					key={user.id}
					className="p-4 bg-white shadow-md rounded-lg text-gray-700"
				>
					<div className="font-bold">{user.name}</div>
					<div className="text-sm">
						<div>UserName: {user.usernmae}</div>
						<div>Email: {user.email}</div>
						<div>Phone: {user.phone}</div>
					</div>
				</li>
			))}
		</ul>
	);
}
