import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/educator/Navbar'
import Sidebar from '../../components/educator/Sidebar'
import Footer from '../../components/educator/Footer'

const Educator = () => {
  return (
    <div className="text-default min-h-screen bg-white flex flex-col">
      
      {/* Top Navbar */}
      <Navbar />

      {/* Main Layout */}
      <div className="flex">
        <Sidebar />

        <div className="p-6 overflow-y-auto flex">
          <Outlet />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Educator
