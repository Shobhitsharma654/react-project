import React from "react";
import { assets } from "../../assets/assets";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();
  const isEducatorRoute = pathname.startsWith("/educator");

  const menuItems = [
    { name: "Dashboard", path: "/educator", icon: assets.home_icon },
    { name: "Add Course", path: "/educator/add-course", icon: assets.add_icon },
    { name: "My Courses", path: "/educator/my-courses", icon: assets.my_course_icon },
    { name: "Students Enrolled", path: "/educator/student-enrolled", icon: assets.person_tick_icon },
  ];

  // If not on educator route, return nothing
  if (!isEducatorRoute) return null;

  return (
    <div className="md:w-64 w-16 border-r min-h-screen text-base border-gray-200 py-2 flex flex-col">
      {menuItems.map((item) => (
        <NavLink
          to={item.path}
          key={item.name}
          end={item.path === "/educator"}
          className={({ isActive }) =>
            `flex items-center md:flex-row flex-col md:justify-start justify-center py-3.5 md:px-10 gap-3
            ${isActive ? "bg-indigo-100 border-r-[4px] border-indigo-500" : "hover:bg-gray-100"}`
          }
        >
          <img src={item.icon} alt={item.name} className="w-6 h-6" />
          <p className="md:block hidden text-center">{item.name}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
