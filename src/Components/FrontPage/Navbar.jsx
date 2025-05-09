import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../Carts/CartContext";
import { AppBar, Toolbar, IconButton, Typography, Badge, Box } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { FaOpencart, FaCameraRetro, FaLaptop } from "react-icons/fa";
import { TbHorseToy } from "react-icons/tb";
import { FaTshirt } from "react-icons/fa";
import { GiAmpleDress } from "react-icons/gi";
import { CiMobile1 } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const categories = [
  { label: "Dresses", icon: <GiAmpleDress />, color: "text-blue-500" },
  { label: "T-Shirts", icon: <FaTshirt />, color: "text-pink-500" },
  { label: "Toys", icon: <TbHorseToy />, color: "text-purple-500" },
  { label: "Mobiles", icon: <CiMobile1 />, color: "text-green-500" },
  { label: "Laptops", icon: <FaLaptop />, color: "text-yellow-500" },
  { label: "Cameras", icon: <FaCameraRetro />, color: "text-red-500" },
];

export default function Navbar() {
  const { cart } = useContext(CartContext);
  const [currentIcon, setCurrentIcon] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % categories.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" className="bg-gradient-to-r from-pink-600 via-purple-800 to-blue-900 shadow-lg z-50">
        <Toolbar className="flex justify-between items-center py-2 px-5">
          <div className="flex items-center space-x-3">
            <Typography variant="h5" className="font-extrabold tracking-wide text-white">
              Shopping
              <span className="text-yellow-300">-Go</span>
            </Typography>
            <FaOpencart className="text-yellow-400 text-3xl" />
          </div>

          <div className="hidden lg:flex items-center justify-center space-x-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`flex flex-col items-center ${
                  index === currentIcon ? "opacity-800 scale-150 animate-linearMove" : "opacity-800"
                } transition-all duration-500`}
              >
                <IconButton size="large" className={`${category.color}`}>
                  {category.icon}
                </IconButton>
                <Typography className="text-sm text-white font-medium">
                  {category.label}
                </Typography>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-6">
            {/* Cart Icon */}
            <IconButton size="large" className="relative hover:text-yellow-800" onClick={() => navigate("/CartPage")}>
              <Badge badgeContent={cart.length} color="error">
                <FaOpencart className="text-white text-3xl hover:text-yellow-600" />
              </Badge>
            </IconButton>

            <IconButton size="large" className="flex items-center text-white hover:text-red-600"onClick={() => navigate("/Login")}>
              <LogoutIcon fontSize="large" />
              <Typography className="text-sm hidden sm:inline ml-1">Logout</Typography>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
