import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../auth/useAuth";

export default function ProtectedRoutes() {
	const { isAuthenticated } = useAuth();

	return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
