import React from 'react'
import { assets } from '../../assets/assets'
import { UserButton, useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const { user } = useUser();

  return (
    <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white">
      
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="w-28 lg:w-32" />
      </Link>

      {/* Right Side */}
      <div className="flex items-center gap-4 text-gray-600">
        <p className="font-medium">
          Hi! {user ? user.fullName : 'Educator'}
        </p>

        {user ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <img src={assets.profile_img} alt="Profile" className="w-8" />
        )}
      </div>
    </div>
  )
}

export default Navbar
