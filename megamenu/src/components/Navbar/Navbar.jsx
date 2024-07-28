import { Link } from "react-router-dom";
import Logo from "../../assets/Untitled-1.png";
import { BiSearch, BiShoppingBag, BiPlus } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";
import Megamenu from "../MegaMenu/Megamenu";
import { Badge } from "@mui/material";
import LeftDrawer from "../Drawers/LeftDrawer";
import MobileNav from "../MobileNav/MobileNav";

const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About",
    route: "/about",
  },
  //   {
  //     label: "Home",
  //     route: "/",
  //   },
  {
    label: "Commercial Setup",
    route: "/Commercial-Setup",
  },
  {
    label: "Products",
    route: "/product",
  },
  {
    label: "Blog",
    route: "/blog",
  },
  {
    label: "Contact",
    route: "/contact",
  },
];

const Navbar = () => {
  let isLogo = true;
  return (
    <nav className="flex justify-around items-center py-12  h-20 ">
      <div className="logo-container z-50">
        {isLogo ? (
          <Link to="/">
            <img src={Logo} alt="logo" className="h-12" />
          </Link>
        ) : (
          <Link to="/">
            <p>Company Logo</p>
          </Link>
        )}
      </div>
      {/*  */}
      <ul className="lg:flex items-center gap-8 hidden  p-2">
        {links.map((item) => (
          <Link to={item.route} key={item.label}className="hover:border-b-2 hover:border-black uppercase font-semibold text-sm ">
            {item.label == "Products" || item.label == "Blog" ? (
              <Megamenu title={item.label} icon={<BiPlus size={12} />} />
            ) : (
              <li className="">{item.label}</li>
            )}
          </Link>
        ))}
      </ul>
      {/*  */}
      <div className="lg:flex items-center  justify-center  cursor-pointer z-50 hidden ">
        <div className="text-2xl pt-3 px-4 text-blue-500 font-bold">
          <BiSearch />
        </div>
        <div className="text-2xl pt-2 px-4 text-blue-500 font-bold">
          <RxAvatar />
        </div>
        <div className="">
          <Badge badgeContent={4} color="secondary" aria-label="cart">
            <LeftDrawer icon={<BiShoppingBag size={25} />} />
          </Badge>
        </div>
      </div>
      <MobileNav/>
    </nav>
  );
};

export default Navbar;
