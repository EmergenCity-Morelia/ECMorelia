import { createContext, useState } from "react";

interface AuthContextType {
	isAuthenticated: boolean;
	setAuth: (state: boolean) => void;
}

interface AuthProviderType {
	children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderType) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const setAuth = (state: boolean) => {
		setIsAuthenticated(state);
	};

	return <AuthContext.Provider value={{ isAuthenticated, setAuth }}>{children}</AuthContext.Provider>;
};
