// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(null);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/history", label: "History" },
    { path: "/sar", label: "SAR Data " },
    { path: "/solution", label: "Solution" }
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="glass sticky top-0 z-50 shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            🍎 Save Aport
          </Link>
        </motion.div>

        <div className="flex space-x-8">
          {navItems.map((item) => (
            <motion.div
              key={item.path}
              onHoverStart={() => setIsHovered(item.path)}
              onHoverEnd={() => setIsHovered(null)}
              className="relative"
            >
              <Link
                to={item.path}
                className={`relative px-3 py-2 font-medium transition-colors duration-300 ${location.pathname === item.path
                    ? "text-red-600"
                    : "text-gray-600 hover:text-red-500"
                  }`}
              >
                {item.label}
                {(location.pathname === item.path || isHovered === item.path) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-400 to-orange-400"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;