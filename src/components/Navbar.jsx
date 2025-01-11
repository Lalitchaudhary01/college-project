import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-[#06286E] to-[#164EC0] text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">Crypto Dashboard</div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search Cryptocurrency..."
          className="px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
        />
        <button className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition">
          Search
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
