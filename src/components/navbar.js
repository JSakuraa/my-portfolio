import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function Example() {
    return (
        <header className="bg-light">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink
                        to=""
                        exact
                        activeClassName="text-white"
                        className="inflex-flex items-center py-6 px-3 mr-4 text-white hover:text-orange text-4xl font-bold cursive tracking-widest"
                    >
                        Justin
                    </NavLink>
                    <NavLink
                        to="/about"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-orange"
                        activeClassName="text-white bg-dark"
                    >
                        About Me
                    </NavLink>
                    <NavLink
                        to="/post"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-orange"
                        activeClassName="text-white bg-dark"
                    >
                        Blog Posts
                    </NavLink>
                    <NavLink
                        to="/project"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-orange"
                        activeClassName="text-white bg-dark"
                    >
                        Projects
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}
