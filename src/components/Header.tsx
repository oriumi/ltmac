import React from "react";
import Link from "next/link";

const Header = () => {
  // const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header className="bg-gray-800 py-4">
      <nav className="max-w-screen-lg px-8 mx-auto sm:px-14 flex justify-between items-center">
        <Link href="/" className="text-gray-100 text-xl font-bold">
          LTMAC
        </Link>
        <ul className="flex flex-row space-x-4">
          {/* <li>
            <Link href="/login">
              <Plus className="text-gray-100 hover:text-gray-200 mt-1 text-lg cursor-pointer" />
            </Link>
          </li> */}
          <li>
            <Link
              href="/login"
              className="text-gray-100 hover:text-gray-200 p-2"
            >
              Login / Criar
            </Link>
          </li>
        </ul>
      </nav>
      {/* {menuOpen && (
        <div className="md:hidden bg-gray-700 py-2">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link href="/sobre" className="text-gray-100 hover:text-gray-200">
                Login / Criar
              </Link>
            </li>
          </ul>
        </div>
      )} */}
    </header>
  );
};

export default Header;
