import React, { useContext } from "react";

import authService from "utils/authService";

const AuthContext = new React.createContext({
	auth: new authService(),
});

export function useAuth() {
	const { auth } = useContext(AuthContext);
	return auth;
}

export function AuthProvider({ children }) {
	return (
		<AuthContext.Provider value={{ auth: new authService() }}>
			{children}
		</AuthContext.Provider>
	);
}
