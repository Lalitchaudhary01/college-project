import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md mt-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          Cryptocurrency Dashboard
        </h1>
      </div>
    </div>
  );
};

export default App;
