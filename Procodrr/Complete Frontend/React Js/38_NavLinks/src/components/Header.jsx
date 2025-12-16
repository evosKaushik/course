import React, { useState } from "react";
import viteLogo from "/vite.svg";
import { NavLink } from "react-router-dom";
import Modal from "./Model";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex justify-between px-4 py-4 shadow-md md:px-8">
      <img src={viteLogo} alt="viteLogo" />
      <ul className="flex gap-4">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `text-blue-800 underline` : ""
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `text-blue-800 underline` : ""
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `text-blue-800 underline` : ""
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Sign In
          </button>
          <Modal isOpen={isOpen} setIsOpen={setIsOpen} header="Sign In">
            <input
              placeholder="Username"
              className="grow rounded border border-gray-600 px-2 py-1"
              type="text"
            />
            <input
              placeholder="Password"
              className="grow rounded border border-gray-600 px-2 py-1"
              type="password"
            />
          </Modal>
        </li>
      </ul>
    </header>
  );
}
