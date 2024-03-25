import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const NavLayout: React.FC = () => {
  return (
    <div className="flex h-screen">
      <div className="w-36 bg-gray-800 text-white">
        <div className="p-5">@luismingati</div>
        <ul>
          <li>
            <Link to="/" className="block p-4 hover:bg-gray-700">Pagina Inicial</Link>
          </li>
          <li>
            <Link to="/about" className="block p-4 hover:bg-gray-700">Info</Link>
          </li>
        </ul>
      </div>

      <div className="flex-1 flex flex-col">
        <nav className="bg-gray-200 text-gray-700 p-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between">
              <div className="flex">
              </div>
              <div className="flex items-center">
                <a className="hover:text-gray-900">Login</a>
              </div>
            </div>
          </div>
        </nav>
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default NavLayout;
