import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../shared/adminSidebar/AdminSidebar";

const AdminLayout = () => {
  return (
    <div className="h-screen bg-gray-200">
      <Container>
        <AdminSidebar />
      </Container>

      <div className="bg-gray-200 py-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
