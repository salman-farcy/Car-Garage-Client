import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";



const Navbar = () => {
     const { user, logOut } = useContext(AuthContext)

     const handleLogOut = () => {
          logOut()
               .then(() => { 
                    alert('ar you sure you loge Out')
               })
               .catch(error => console.log(error))
     }




     const navlinks = <>
          <li className=""><NavLink
               to="/"
               className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
               }
          >
               Home
          </NavLink></li>

          <li><NavLink
               to="/about"
               className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
               }
          >
               About
          </NavLink></li>


          {
               user?.email ? <>
                    <li><button onClick={handleLogOut} >Log out</button> </li>
                    <li><NavLink
                         to="/bookings"
                         className={({ isActive, isPending }) =>
                              isPending ? "pending" : isActive ? "active" : ""
                         }
                    >
                         bookings
                    </NavLink></li>
               </>

                    : <li><NavLink
                         to="/login"
                         className={({ isActive, isPending }) =>
                              isPending ? "pending" : isActive ? "active" : ""
                         }
                    >
                         Login
                    </NavLink></li>
          }



          <li><NavLink
               to="/signup"
               className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
               }
          >
               Sign Up
          </NavLink></li>

     </>

     return (
          <div className="bg-base-200">
               <div className="flex justify-between items-center p-4 container mx-auto ">
                    <div className="navbar-start ">
                         <div className="dropdown">
                              <label tabIndex={0} className="btn btn-ghost p-0 lg:hidden">
                                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </label>
                              <ul tabIndex={0} className="menu menu-sm dropdown-content text-center  mt-3 z-[1] p-2 shadow bg-base-100  ">
                                   {navlinks}
                              </ul>
                         </div>
                         <Link to={'/'} className="btn btn-ghost normal-case text-xl px-0 w-16">
                              <img src={logo} alt="" />
                         </Link>
                    </div>

                    <div className="navbar-center hidden lg:flex">
                         <ul className="menu menu-horizontal px-1">
                              {navlinks}
                         </ul>
                    </div>

                    <div className="">
                         <a className="btn btn-outline btn-warning btn-xs md:btn-sm lg:btn-md rounded-none ">Appointment</a>
                    </div>
               </div>
          </div>
     );
};

export default Navbar;