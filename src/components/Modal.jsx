import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsXCircle } from "react-icons/bs";

const Modal = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-gray-400 bg-opacity-75 flex items-center justify-center">
      <div className="p-[30px] max-w-lg rounded-lg bg-white m-auto">
        <div className="flex justify-end">
          <BsXCircle
            onClick={handleClose}
            className="font-bold fill-red-600 cursor-pointer text-2xl"
          />
        </div>
        <img
          src="https://www.kychub.com/wp-content/uploads/2023/05/LOGO_White.svg"
          className="w-[20px] h-[20px] m-auto"
          alt="kychub"
        />
        <h2 className="text-center font-bold">Explore the kychub</h2>
        <p className="text-center">Compare the products in parallel...</p>
        <div className="w-full lg:mr-[20px] flex justify-center items-center h-10 mt-[20px]">
          <Link
            to="/Sidebar"
            className="bg-blue-600 px-[15px] py-[7px] rounded-lg text-white hover:bg-white hover:text-cyan-500 hover:border-sky-400"
          >
            Compare
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
