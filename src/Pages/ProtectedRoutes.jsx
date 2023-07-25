import'react'
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
    const { nameUser } = useSelector((state) => state);

    if (nameUser) {
      return <Outlet />;
    } else {
      return <Navigate to="/" />;
    }
  };

export default ProtectedRoutes