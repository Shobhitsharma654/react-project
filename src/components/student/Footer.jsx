import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className="bg-gray-900 w-full md:px-36 mt-10 text-left">
      
      {/* Main Section */}
      <div className="flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/20">

        {/* Brand Info */}
        <div className="flex flex-col items-start w-full md:text-left">
          <img src={assets.logo_dark} alt="logo" className="w-32" />
          <p className="mt-4 text-sm leading-6 text-white/75">
            Empowering learners with high-quality courses taught by top educators.
            Learn modern skills and build your career anywhere, anytime.
          </p>
        </div>

        {/* Company Links */}
        <div className="flex flex-col items-center md:items-start w-full">
          <h2 className="font-semibold text-white mb-5">Company</h2>
          <ul className="flex md:flex-col w-full justify-between text-sm text-white/75 md:space-y-2">
            <li><a className="hover:text-white transition" href="/">Home</a></li>
            <li><a className="hover:text-white transition" href="/">About</a></li>
            <li><a className="hover:text-white transition" href="/">Courses</a></li>
            <li><a className="hover:text-white transition" href="/">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="flex flex-col items-center md:items-start w-full">
          <h2 className="font-semibold text-white mb-5">Contact</h2>

          <ul className="text-sm space-y-2 text-white">
            <li>📞 +91 9876543210</li>
            <li>📧 support@edustack.com</li>
          </ul>

          <div className="flex gap-3 mt-3">
            <a href="#" className="hover:opacity-80 transition ">
              <img src={assets.facebook_icon} className="w-10" alt="Facebook" />
            </a>
            <a href="#" className="hover:opacity-80 transition">
              <img src={assets.instagram_icon} className="w-10" alt="Instagram" />
            </a>
            <a href="#" className="hover:opacity-80 transition">
              <img src={assets.twitter_icon} className="w-10" alt="Twitter" />
            </a>
         
          </div>
        </div>

        {/* Newsletter */}
        <div className="hidden md:flex flex-col items-start w-full">
          <h2 className="font-semibold text-white">Newsletter</h2>
          <p className="text-sm mt-3 text-white/75">
            Get the latest courses & resources every week.
          </p>

          <div className="pt-4 flex items-center gap-3">
            <input
              className="border border-gray-500/40 bg-gray-800 text-gray-300 placeholder-gray-500 outline-none w-64 h-9 rounded px-3 text-sm"
              type="email"
              placeholder="Enter your email"
            />
            <button className="bg-blue-600 hover:bg-blue-700 transition w-24 h-9 text-white text-sm rounded">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <p className="py-4 text-center text-xs md:text-sm text-white/60">
        © 2025 Edemy — Built with ❤️ by <span className="text-white">Abhay Tomar</span>
      </p>
    </footer>
  )
}

export default Footer
