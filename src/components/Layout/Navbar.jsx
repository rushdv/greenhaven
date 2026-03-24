import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Leaf, Menu, X, ChevronDown, LogOut, User } from "lucide-react";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = async () => {
    try {
      await logOut();
      toast.success("Logged out successfully");
    } catch {
      toast.error("Logout failed");
    }
    setDropdownOpen(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navLinks = (
    <>
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `font-medium transition-colors hover:text-green-600 ${isActive ? "text-green-600" : "text-gray-700"}`
        }
        onClick={() => setMenuOpen(false)}
      >
        Home
      </NavLink>
      <NavLink
        to="/plants"
        className={({ isActive }) =>
          `font-medium transition-colors hover:text-green-600 ${isActive ? "text-green-600" : "text-gray-700"}`
        }
        onClick={() => setMenuOpen(false)}
      >
        Plants
      </NavLink>
      {user && (
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `font-medium transition-colors hover:text-green-600 ${isActive ? "text-green-600" : "text-gray-700"}`
          }
          onClick={() => setMenuOpen(false)}
        >
          My Profile
        </NavLink>
      )}
    </>
  );

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Leaf className="text-green-600 w-7 h-7" />
            <span className="text-xl font-bold text-green-700">GreenHaven</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">{navLinks}</div>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <img
                    src={user.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName || "User")}&background=16a34a&color=fff`}
                    alt="avatar"
                    className="w-9 h-9 rounded-full object-cover border-2 border-green-500"
                  />
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="font-semibold text-gray-800 text-sm truncate">
                        {user.displayName || "User"}
                      </p>
                      <p className="text-xs text-gray-500 truncate">{user.email}</p>
                    </div>
                    <Link
                      to="/profile"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <User className="w-4 h-4" /> My Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      <LogOut className="w-4 h-4" /> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-green-700 font-medium border border-green-600 rounded-lg hover:bg-green-50 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {navLinks}
          {user ? (
            <div className="border-t pt-3 flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <img
                  src={user.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName || "User")}&background=16a34a&color=fff`}
                  alt="avatar"
                  className="w-9 h-9 rounded-full object-cover border-2 border-green-500"
                />
                <div>
                  <p className="font-semibold text-sm">{user.displayName || "User"}</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-red-600 text-sm font-medium"
              >
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-3 border-t pt-3">
              <Link
                to="/login"
                className="flex-1 text-center py-2 border border-green-600 text-green-700 rounded-lg font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="flex-1 text-center py-2 bg-green-600 text-white rounded-lg font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Register
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
