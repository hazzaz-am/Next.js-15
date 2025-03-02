"use client"

import { useTheme } from "../theme-provider";

const ClientRoutePage = () => {
	const theme = useTheme();

	return (
		<div
			style={{
				color: theme.colors.secondary,
			}}
		>
			ClientRoutePage
		</div>
	);
};
export default ClientRoutePage;
