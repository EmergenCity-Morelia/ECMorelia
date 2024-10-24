import { Outlet, Navigate } from "react-router-dom";
export { useState } from "react";

export default function ProtectedRoute() {
	const auth = useAuth;

	return auth.isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}
