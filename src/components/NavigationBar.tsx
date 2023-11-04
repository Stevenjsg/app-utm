'use client';
import Link from 'next/link';
import {useState} from 'react';

import LeftMenu from './LeftMenu';

const MenuIcon = ({stroke = 'currenColor', size = 32}) => (
  <svg
    fill="none"
    height={size}
    stroke={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="4"
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="3" x2="21" y1="12" y2="12" />
    <line x1="3" x2="21" y1="6" y2="6" />
    <line x1="3" x2="21" y1="18" y2="18" />
  </svg>
);
const CloseIcon = ({stroke = 'currenColor', size = 32}) => (
  <svg
    fill="none"
    height={size}
    stroke={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="4"
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="18" x2="6" y1="6" y2="18" />
    <line x1="6" x2="18" y1="6" y2="18" />
  </svg>
);

function NavigationBar(): JSX.Element {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <header className="fixed top-0 z-50 flex min-h-[5rem] min-w-full flex-wrap justify-between bg-green-800">
        <hgroup className="flex items-center justify-evenly gap-2">
          <button
            className="ml-2 flex place-content-center rounded-md bg-green-800 text-white hover:stroke-green-900"
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          >
            {openMenu ? <CloseIcon stroke="white" /> : <MenuIcon stroke="white" />}
          </button>

          <Link className="text-6xl font-bold text-yellow-400" href="/">
            HOME
          </Link>
        </hgroup>
        <nav className="flex  items-center justify-around gap-2 pr-5">
          <Link className="text-xl font-semibold text-white" href="/">
            Home
          </Link>
          <Link className="text-xl font-semibold text-white" href="/login">
            Login
          </Link>
          <Link className="text-xl font-semibold text-white" href="/register">
            Register
          </Link>
        </nav>
      </header>
      <LeftMenu isShow={openMenu} />
    </>
  );
}

export default NavigationBar;
