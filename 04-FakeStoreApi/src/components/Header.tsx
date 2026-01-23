import { NavLink } from "react-router-dom";

const Header= () => {
  const linkClass =
    "px-4 py-2 font-medium transition hover:text-blue-600";

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-600">
          ShopEasy
        </h1>

        {/* Links */}
        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-700"}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-700"}`
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-700"}`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-700"}`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
