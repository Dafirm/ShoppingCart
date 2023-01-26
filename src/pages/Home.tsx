

import React from "react";

import { Link } from "react-router-dom";



const Home: React.FC = () => {
  return (
    <>
   
    <div className="bg-gray-200 min-h-screen flex flex-col">
          <header className="bg-white p-6">
              <h1 className="text-4xl font-medium">Welcome to Our Store</h1>
          </header>
          <main className="flex-1 p-6">
              <p>Here is some information about my app and its features.</p>
          </main>

          <Link to="/store">Goto Store</Link>


          <footer className="bg-white p-6">
              <p>Copyright © 2021 My Company</p>
          </footer>
      </div></>
  );
};

export default Home;

