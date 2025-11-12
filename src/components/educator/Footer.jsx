import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className="w-full bg-gray-300 border-t py-6 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">

      {/* Left - Logo + Text */}
      <div className="flex items-center gap-4">
        <img 
          src={assets.logo} 
          alt="Logo" 
          className="hidden md:block w-20"
        />

        <p className="text-xs md:text-sm items-center justify-center text-gray-500 whitespace-nowrap">
          © 2025 <span className="font-medium text-gray-600">Abhay Tomar</span> — All Rights Reserved.
        </p>
      </div>

      {/* Right - Social Icons */}
      <div className="flex items-center gap-4">
        <a href="#" className="hover:opacity-70 transition bg-blue-500 rounded-full">
          <img src={assets.facebook_icon} alt="Facebook" className="w-5 md:w-6" />
        </a>
        <a href="#" className="hover:opacity-70 transition">
          <img src={assets.twitter_icon} alt="Twitter" className="w-5 md:w-6" />
        </a>
        <a href="#" className="  hover:opacity-70 transition">
          <img src={assets.instagram_icon} alt="Instagram" className="w-5 md:w-6" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
