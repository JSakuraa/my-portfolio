import React from "react";
import { NavLink } from "react-router-dom";
  
  export default function Example() {
    return (
      <header className="bg-gray">
          <div className="container mx-auto flex justify-between">
              <nav className="flex">
                  <NavLink to='' exact className="inflex-flex items-center py-6 px-3 mr-4 text-white hover:text-orange text-4xl font-bold cursive ">
                      Justin
                  </NavLink>
                  <NavLink to="/about">
                      About Me
                  </NavLink>
                  <NavLink to="/post">
                      Blog Posts
                  </NavLink>
                  <NavLink to="/project">
                      Projects
                  </NavLink>
              </nav>
          </div>
      </header>
    )
  }