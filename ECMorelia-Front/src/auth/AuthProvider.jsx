import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const setAuth = (state) => {
		setIsAuthenticated(state);
	};

	return <AuthContext.Provider value={{ isAuthenticated, setAuth }}>{children}</AuthContext.Provider>;
};
