"use client";

import "./styles/cursor-hover.css"

export const Navbar = () => {
  return (
    <nav className="bg-black font-mono border-b-2 border-green-400 text-green-400 p-10 fixed w-full z-20 whitespace-pre-wrap">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-semibold text-3xl">martin-portfolio</div>
        <ul className="flex gap-8 space-x-4 text-2xl">
          <li>
            <a className="relative terminal-link" href="#home">
              home
            </a>
          </li>
          <li>
            <a className="relative terminal-link" href="#about">
              about
            </a>
          </li>
          <li>
            <a className="relative terminal-link" href="#projects">
              projects
            </a>
          </li>
          <li>
            <a className="relative terminal-link" href="#contact">
              contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
