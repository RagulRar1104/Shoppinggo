import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaOpencart } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { HiLocationMarker } from 'react-icons/hi';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About Us Section */}
          <div>
            <div className="flex items-center mb-4">
            <h3 className="text-2xl font-bold">ShoppingGo</h3>

              <FaOpencart className="text-blue-400 text-3xl mr-2" />
            </div>
            <p className="text-sm">
              ShoppingGo is a premium e-commerce platform that turns browsers into buyers. We provide high-quality
              products and a seamless shopping experience.
            </p>
          </div>

          {/* Subscription Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Subscribe to our Newsletter</h3>
            <p className="text-sm mb-4">
              Stay updated with the latest offers and products.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-l-md focus:outline-none text-black"
              />
              <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-r-md">
                Subscribe
              </button>
            </form>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <MdEmail className="text-blue-400" />
                <span>support@shoppinggo.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MdPhone className="text-blue-400" />
                <span>+91 7598459312</span>
              </li>
              <li className="flex items-center space-x-2">
                <HiLocationMarker className="text-blue-400" />
                <span>Shopping Street, Nagercoil, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-700"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a href="#" className="text-white hover:text-blue-400">
              <FaFacebookF />
            </a>
            <a href="#" className="text-white hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="#" className="text-white hover:text-blue-400">
              <FaInstagram />
            </a>
            <a href="#" className="text-white hover:text-blue-400">
              <FaLinkedinIn />
            </a>
          </div>

          {/* Copyright Section */}
          <div className="text-sm">
            <p>
              Powered by <span className="font-bold text-blue-400">Ragul</span> | © 2024 ShoppingGo. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
