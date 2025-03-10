"use client"

import { useEffect } from "react";

export default function ErrorPage({ error }: { error: Error }) {
	useEffect(() => {
		console.log(`${error}`);
	}, [error]);

	return <div className="text-center text-red-500">Error Fetching Data</div>;
}
