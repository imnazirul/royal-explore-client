import { Link, NavLink } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import "./Navbar.css";
import Logo from "./../../assets/logo.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, loading, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const themeMode = localStorage.getItem("theme");

    document.querySelector("html").setAttribute("data-theme", themeMode);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const navLinks = (
    <>
      <span className="hover:text-[#3843D2] ">
        <NavLink className="px-4 py-2 rounded-lg" to="/">
          Home
        </NavLink>
      </span>{" "}
      {!user && (
        <>
          <span className="hover:text-[#3843D2]">
            <NavLink className="px-4 py-2 rounded-lg" to="/login">
              Login
            </NavLink>
          </span>
          <span className="hover:text-[#3843D2]">
            <NavLink className="px-4 py-2 rounded-lg" to="/register">
              Register
            </NavLink>
          </span>{" "}
        </>
      )}
      {user && (
        <>
          {" "}
          <span className="hover:text-[#3843D2]">
            <NavLink className="px-4 py-2 rounded-lg" to="/all_tourists_spot">
              All Tourists Spot
            </NavLink>
          </span>
          <span className="hover:text-[#3843D2]">
            <NavLink className="px-4 py-2 rounded-lg" to="/add_tourists_spot">
              Add Tourists Spot
            </NavLink>
          </span>
          <span className="hover:text-[#3843D2]">
            <NavLink className="px-4 py-2 rounded-lg" to="/my_list">
              My List
            </NavLink>
          </span>
        </>
      )}
    </>
  );

  const handleSignOut = () => {
    logOut()
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <div className="navbar bg-base-100 font-poppins">
      <div className="navbar-start flex md:gap-2  items-center">
        <div className="dropdown z-20">
          <div tabIndex={0} role="button" className=" btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <div
            tabIndex={0}
            className="menu menu-sm gap-4 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 border border-btn-1 py-5 md:text-lg md:py-7 "
          >
            {navLinks}
          </div>
        </div>
        <Link
          to="/"
          className="text-xl md:text-2xl btn-ghost font-jost flex gap-0 lg:text-2xl font-bold text-[#40008B]"
        >
          <div className="flex items-center">
            <img className="max-w-10" src={Logo} alt="" />
            Royal Explore
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="menu menu-horizontal px-1 font flex gap-5 text-[16px]">
          {navLinks}
        </div>
      </div>
      <div className="navbar-end flex gap-5 items-center">
        {" "}
        <label className="cursor-pointer grid place-items-center">
          <input
            onChange={handleToggle}
            type="checkbox"
            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
        {loading ? (
          <>
            <span className="loading loading-spinner loading-md"></span>
          </>
        ) : user ? (
          <div className="flex items-center gap-1">
            <a>
              {" "}
              <div
                className="tooltip tooltip-info tooltip-left"
                data-tip={user.displayName && user.displayName}
              >
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user?.photoURL}
                    />
                  </div>
                </div>
              </div>
            </a>
            <button
              onClick={handleSignOut}
              className="max-sm:btn-sm bg-green-1000 btn bg-primary-1 text-[#FCFCFC] font-bold flex items-center  gap-1 hover:bg-primary-1"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="max-sm:btn-sm bg-green-1000 btn bg-primary-1 text-[#FCFCFC] font-bold flex items-center gap-1 hover:bg-primary-1"
          >
            <FiLogIn></FiLogIn>Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
