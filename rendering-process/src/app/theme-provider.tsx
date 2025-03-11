"use client";

import { createContext, useContext } from "react";

type Theme = {
	colors: {
		primary: string;
		secondary: string;
	};
};

const defaultTheme: Theme = {
	colors: {
		primary: "#09122C",
		secondary: "#E50046",
	},
};

const ThemeContext = createContext<Theme>(defaultTheme);

export default function ThemeProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ThemeContext.Provider value={defaultTheme}>
			{children}
		</ThemeContext.Provider>
	);
}

export const useTheme = () => useContext(ThemeContext);
