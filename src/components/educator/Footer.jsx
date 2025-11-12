import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className="flex md:flex-row flex-col-reverse items-center justify-between w-full px-8 border-t py-4 bg-white">

      {/* Left Side - Logo + Text */}
      <div className="flex items-center gap-4">
        <img src={assets.logo} alt="Logo" className="hidden md:block w-20" />
        <div className="hidden md:block h-7 w-px bg-gray-400/50"></div>

        <p className="text-center text-xs md:text-sm text-gray-500">
          © 2025 Bhola Paul — All Rights Reserved.
        </p>
      </div>

      {/* Right Side - Icons */}
      <div className="flex items-center gap-3 mb-3 md:mb-0">
        <a href="#" className="hover:opacity-70 transition">
          <img src={assets.facebook_icon} alt="Facebook" className="w-5" />
        </a>
        <a href="#" className="hover:opacity-70 transition">
          <img src={assets.twitter_icon} alt="Twitter" className="w-5" />
        </a>
        <a href="#" className="hover:opacity-70 transition">
          <img src={assets.instagram_icon} alt="Instagram" className="w-5" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
