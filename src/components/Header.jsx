import React, { useState } from "react";

const Header = () => {
  const [isToggle, setToggle] = useState(false);

  const [isLogin, setLogin] = useState(false);

  const [avatarToggle, setAvatarToggle] = useState(false);

  const avatarLink = [
    {
      name: "Profile",
      link: "#profile",
    },
    {
      name: "Logout",
      link: "#logout",
    },
  ];
  const linkList = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "What's new?",
      link: "#whatNew",
    },
    {
      name: "About",
      link: "#about",
    },
  ];

  return (
    <header className="top-0 left-0 w-full flex items-center z-10 border-b-2 border-black fixed bg-white">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div>
            <a
              href="#home"
              className="text-primary font-bold text-xl block py-6"
            >
              LPPAIK
            </a>
          </div>

          <div className="flex items-center px-4">
            <button
              onClick={() => setToggle(!isToggle)}
              type="button"
              id="hamburger"
              name="hamburger"
              className={`block absolute right-4 lg:hidden ${
                isToggle ? "hamburger-active" : ""
              }`}
            >
              <span className="hamburger-line origin-top-left"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line origin-bottom-left "></span>
            </button>

            {/* navbar */}
            <nav
              className={`absolute py-5 bg-slate-100 shadow-lg  rounded-lg max-w-[200px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none ${
                !isToggle ? "hidden" : ""
              }`}
            >
              <ul className="block lg:flex">
                {linkList.map(({ name, link }) => (
                  <li className="group">
                    <a
                      href={link}
                      className="text-black py-2 mx-8 lg:mx-4 flex group-hover:text-primary lg:border-none border-b"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div
              className={`flex justify-end mr-10  ${
                isLogin ? "lg:w-52" : "w-52"
              }`}
            >
              {isLogin ? (
                <>
                  <a
                    onClick={() => setAvatarToggle(!avatarToggle)}
                    className="w-10 h-10 rounded-full bg-teal-600 border-2 border-black cursor-pointer"
                  >
                    <img src="avatar-1.png" alt="" className="w-full" />
                  </a>
                  {avatarToggle && (
                    <ul className="absolute w-52 bg-slate-100 rounded shadow-lg mt-10 ">
                      {avatarLink.map(({ name, link }) => (
                        <li className="group">
                          <a
                            href={link}
                            className="text-black py-2 mx-8 lg:mx-4 flex group-hover:text-primary border-b"
                          >
                            {name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <>
                  <button className="btn bg-sky-400 hover:bg-sky-500 py-1 px-4 mr-4 ">
                    Daftar
                  </button>
                  <button className="btn bg-yellow-500 hover:bg-yellow-600 py-1 px-4 mr-4 lg:mr-0">
                    Masuk
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
        {/* <button onClick={() => setLogin(!isLogin)}>Pencet</button> */}
      </div>
    </header>
  );
};

export default Header;