// import { NavLink } from "react-router-dom";

// const linkList = [
//   {
//     name: "Home",
//     path: "/",
//   },
//   {
//     name: "About",
//     path: "/about",
//   },
//   {
//     name: "Contact",
//     path: "/contact",
//   },
// ];

const Header = () => {
  return (
    <div className="flex items-center justify-between  p-5 bg-transparent ">
      <div className="flex items-end">
        <img src="VITRAN.png" alt="" className="max-w-[30px] w-full" />
        <strong className=" leading-none text-primary text-2xl">iTran</strong>
      </div>
      {/* <div className="flex items-center space-x-5">
        {linkList.map((link) => (
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-white"
            }
            key={link.name}
          >
            {link.name}
          </NavLink>
        ))}
      </div> */}
      <div>
        <button className="bg-primary text-white px-5 py-2 rounded-full">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Header;
