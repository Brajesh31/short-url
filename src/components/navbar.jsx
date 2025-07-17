import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import LinkIcon from "components/icons/short-link";

const Navbar = () => {
  const navCssClasses =
    "block py-2 pl-3 pr-4 rounded md:bg-transparent  md:p-0 hover:text-blue-400";
  return (
    <div className="sticky top-0 z-40 w-full">
      <div className="bg-gray-800 border-b-[1px] border-solid border-gray-600 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className=" flex-1 flex items-center justify-between">
              <div>
                <Link to={"home"}>
                  <h1 className="text-white text-2xl font-bold underline underline-offset-4 flex items-center gap-[6px] cursor-pointer">
                    <span>Short</span>
                    <span className="w-6 h-6 flex justify-center items-center">
                      <LinkIcon />
                    </span>
                    <span>URL</span>
                  </h1>
                </Link>
              </div>
              <div className="flex justify-end md:justify-center items-center gap-2 sm:gap-6 md:mr-40">
                <NavLink
                  to="home"
                  className={({ isActive, isPending }) =>
                    isActive
                      ? `${navCssClasses} text-blue-400`
                      : `${navCssClasses} text-white`
                  }
                  aria-current="page">
                  Home
                </NavLink>
                <NavLink
                  to="my-links"
                  className={({ isActive, isPending }) =>
                    isActive
                      ? `${navCssClasses} text-blue-400`
                      : `${navCssClasses} text-white`
                  }
                  aria-current="page">
                  My Links
                </NavLink>
              </div>
              <div className="hidden md:block"></div>
            </div>
            <div className="items-center gap-4 hidden">
              <button
                type="button"
                className="  border  focus:outline-none  focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700">
                Login
              </button>
              <button
                type="button"
                className=" focus:outline-none focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-gray-900 bg-white hover:bg-gray-700 focus:ring-gray-700 border-gray-700">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
