import React from "react";
import NavListItem from "../components/NavListItem";
import navListData from "../data/navListData";
import Search from "../components/Search";

const Header = () => {
  return (
    <>
      <header className="bg-black w-full h-full fixed flex justify-between p-2 transition z-[10000]">
        <a href="" className="text-white font-bold text-2xl ">
          Cinema
        </a>

        <ul className="flex text-gray-300 mx-auto text-lg capitalize ">
          {
            navListData.map((nav)=>(
              <NavListItem  key={nav.id} nav={nav}/>
            ))
          }
        </ul>
        <Search/>
      </header>
    </>
  );
};

export default Header;
