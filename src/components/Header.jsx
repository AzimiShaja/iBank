import { HiMail } from "react-icons/hi";
import { ImLocation } from "react-icons/im";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiTireIronCross } from "react-icons/gi";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState(props.activeNav);
  const [sticky, setSticky] = useState(false);

  function handleNav() {
    if (window.scrollY >= 50) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleNav);
    return () => {
      window.removeEventListener("scroll", handleNav);
    };
  });
  function handleToggle() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div
        className={`bg-black py-3 text-white flex justify-between lg:px-20 max-lg:hidden`}
      >
        <div className="flex gap-4">
          <h1 className="flex items-center gap-1">
            <HiMail className="text-orange-500" /> support@ibank.com
          </h1>
          <h1 className="flex items-center gap-1">
            <ImLocation className="text-orange-500" /> United state
          </h1>
        </div>
        <div className="flex gap-4 font-light">
          <p className="border-r border-white px-4 cursor-pointer hover:underline">
            Support
          </p>
          <p className="cursor-pointer hover:underline">Help</p>
        </div>
      </div>
      {/* =========Header========= */}
      <div
        className={`${
          sticky ? "sticky top-0 z-50 bg-white duration-500 " : " "
        }`}
      >
        <header
          className={`flex items-center justify-between py-4 px-5 lg:px-20 shadow-md border-b-4 border-orange-500 `}
        >
          <Link to="/" className="cursor-pointer">
            <h1 className="text-3xl font-bold font-pacifico">
              <span className="text-orange-500 font-pacifico mr-1 text-4xl">
                i
              </span>
              Bank
            </h1>
          </Link>
          <div className="flex gap-6 items-center max-lg:hidden">
            <ul className="flex gap-4 text-lg nav-links">
              <Link to={"/"}>
                <li
                  className={`${activeNav === 0 ? "active-nav" : ""}`}
                  onClick={() => setActiveNav(0)}
                >
                  Home
                </li>
              </Link>
              <Link to={"/about"}>
                <li
                  className={`${activeNav === 1 ? "active-nav" : ""} `}
                  onClick={() => setActiveNav(1)}
                >
                  About us
                </li>
              </Link>
              <Link to={"/services"}>
                <li
                  className={`${activeNav === 2 ? "active-nav" : ""}`}
                  onClick={() => setActiveNav(2)}
                >
                  Service
                </li>
              </Link>
              <Link to={"/contact"}>
                <li
                  className={`${
                    activeNav === 3 ? "active-nav" : ""
                  } onClick={() => setActiveNav(3)`}
                >
                  Contact
                </li>
              </Link>
              <Link to={"/login"}>
                <li
                  className={`${activeNav === 4 ? "active-nav" : ""}`}
                  onClick={() => setActiveNav(4)}
                >
                  {" "}
                  login
                </li>
              </Link>
            </ul>
            <Link to={"/register"}>
              <button className="bg-blue-900 py-3 px-7 border border-blue-900 text-white rounded-lg hover:bg-white hover:text-black duration-300">
                Register
              </button>
            </Link>
          </div>
          {/* =========Hamburger Menu========= */}
          {isOpen ? (
            <GiTireIronCross
              onClick={handleToggle}
              className="text-orange-500 text-4xl lg:hidden"
            />
          ) : (
            <button className="lg:hidden">
              <RxHamburgerMenu
                onClick={handleToggle}
                className="text-orange-500 text-4xl"
              />
            </button>
          )}
        </header>
        <div
          className={`flex flex-col gap-6 items-center shadow-xl py-10 px-10 lg:hidden ${
            isOpen ? "show_links" : "hide_links"
          }`}
        >
          <ul className="flex flex-col items-center gap-4 text-lg nav-links">
            <Link to={"/"}>
              <li
                className={` ${activeNav === 0 ? "active-nav" : ""}`}
                onClick={() => setActiveNav(0)}
              >
                Home
              </li>
            </Link>
            <Link to={"/about"}>
              <li
                className={`${activeNav === 1 ? "active-nav" : ""} `}
                onClick={() => setActiveNav(1)}
              >
                About us
              </li>
            </Link>
            <Link>
              <li
                className={`${activeNav === 2 ? "active-nav" : ""}`}
                onClick={() => setActiveNav(2)}
              >
                Service
              </li>
            </Link>
            <Link>
              <li
                className={`${activeNav === 3 ? "active-nav" : ""}`}
                onClick={() => setActiveNav(3)}
              >
                Contact
              </li>
            </Link>
            <Link to={"/login"}>
              <li>login</li>
            </Link>
          </ul>
          <Link to={"/register"}>
            <button className="bg-blue-900 py-3 px-7 border border-blue-900 text-white rounded-lg hover:bg-white hover:text-black duration-300">
              Register
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
