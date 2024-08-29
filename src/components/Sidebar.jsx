import React, { useState, useEffect } from "react";
import Avatar from "../assets/Avatar.png";
import { FaMoon, FaSun } from "react-icons/fa";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("theme", !darkMode ? "dark" : "light");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  return (
    <div className="flex w-full">
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out bg-gray-400 dark:bg-gray-800 text-white w-64`}
      >
        <div className="flex items-center justify-between h-16 px-4 bg-gray-500 dark:bg-gray-900">
          <h2 className="text-lg font-semibold">Sidebar</h2>
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none font-semibold"
          >
            X
          </button>
        </div>
        <nav className="mt-10">
          <Link
            to="modal"
            className="text-lg font-semibold block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-500 dark:hover:bg-gray-700 hover:text-gray-400 dark:hover:text-gray-300"
          >
            Product Details
          </Link>
          <ul className="px-[20px]">
            <li>1. Details</li>
            <li>2. Details</li>
            <li>3. Details</li>
          </ul>
          <Link
            to="modal"
            className="text-lg font-semibold block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-500 dark:hover:bg-gray-700 hover:text-white dark:hover:text-gray-300"
          >
            Customer product details
          </Link>
          <ul className="px-[20px]">
            <li>1. Details</li>
            <li>2. Details</li>
            <li>3. Details</li>
          </ul>
        </nav>
      </div>
      <div className="flex-1 flex flex-col w-full">
        <header className="flex items-center justify-between h-16 px-4 bg-gray-500 dark:bg-gray-900 text-white">
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none font-semibold"
          >
            ☰
          </button>
          <h1 className="text-lg font-semibold ">Kyc-hub</h1>
          <div className="flex justify-between gap-2 items-center">
            <img src={Avatar} className="w-[35px] h-[35px]" />
            <button
              onClick={toggleDarkMode}
              className="w-[30px] h-[30px] border-2 rounded-md flex items-center justify-center"
            >
              {darkMode ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="text-gray-400" />
              )}
            </button>
          </div>
        </header>
        <main className="flex-1 h-[100%] p-6 bg-gray-100 dark:bg-gray-700 dark:text-white">
          <h2 className="text-2xl font-semibold text-center">
            ⭐ Welcome to the Kyc-hub Dashboard ⭐
          </h2>
          <Cards />
        </main>
      </div>
    </div>
  );
};

export default Sidebar;
