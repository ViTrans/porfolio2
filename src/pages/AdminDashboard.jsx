import { Outlet } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
const AdminDashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        {/* Navigation */}
        <ul className="mt-4">
          <li className="py-2">
            <a
              href="/admin/add-product"
              className="text-gray-400 hover:text-white"
            >
              Products
            </a>
          </li>
          <li className="py-2">
            <a href="/admin/contact" className="text-gray-400 hover:text-white">
              Contact
            </a>
          </li>
          <li className="py-2">
            <a
              onClick={() => {
                signOut(auth);
              }}
              className="text-gray-400 hover:text-white"
            >
              Logout
            </a>
          </li>
          {/* Add more navigation items here */}
        </ul>
      </div>
      {/* Main content */}
      <div className="flex-1 bg-white p-4">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AdminDashboard;
