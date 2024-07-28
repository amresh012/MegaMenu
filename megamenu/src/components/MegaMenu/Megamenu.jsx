/* eslint-disable react/prop-types */
import { Divider } from "@mui/material";
import "./Megamenu.css"
import { GoDash } from "react-icons/go";

const Megamenu = ({title ,icon}) => {
  return (
    <div className="dropdown">
      <button className="dropbtn">
        <p className="uppercase font-semibold">{title}</p>
        <span className="icon-1"> {icon}</span>
        <span className="hidden icon-2">
          <GoDash />
        </span>
      </button>
      <div className="dropdown-content">
        <div className="header"></div>
        <div className="h-[23rem] flex justify-around">
          {/* section-1 */}
          <div className="w-[25rem]  h-full flex flex-col gap-4  items-start justify-start p-4">
            <h1 className="text-3xl font-bold leading-10">
              Fitness Equipment Built to Perfection
            </h1>
            <p className="font-medium capitalize text-gray-900">
              Adding fuel to every fitness fanatics passion with the best
              equipment in India.
            </p>
            <button className="font-bold text-white w-fit uppercase bg-black p-4 text-[20px] rounded-md mt-12">
              Shop All Fitness Products
            </button>
          </div>
          {/* section-1 end */}
          <Divider orientation="vertical" variant="middle" flexItem />
          {/* section-2 */}
          <div className="w-[25rem]">{}</div>
          {/* section-2 end */}

          <div className=" flex flex-col w-[25rem]  items-start gap-2 justify-start  ">
            <h1 className="text-xl">FEATURED</h1>
            <div className=" flex items-start h-full gap-2">
              <div className="">
                <img
                  src="https://kfsfitness.com/wp-content/uploads/2022/03/blog11.jpg"
                  alt=""
                  className=""
                />
                <span></span>
              </div>
              <div className=" ">
                <img
                  src="https://kfsfitness.com/wp-content/uploads/2022/03/blog15.jpg"
                  alt=""
                  className=""
                />
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Megamenu