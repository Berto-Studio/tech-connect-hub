import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const RequireAdmin = ({ children }: { children: JSX.Element }) => {
  const { user, isAdmin, loading } = useAuth();
  if (loading) return <div className="p-8 text-center text-muted-foreground">Loading…</div>;
  if (!user) return <Navigate to="/auth" replace />;
  if (!isAdmin) return <Navigate to="/" replace />;
  return children;
};

export default RequireAdmin;
