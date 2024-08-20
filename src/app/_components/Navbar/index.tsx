"use client";

import Link from "next/link";
import "./styles.css";
import BurguerMenu from "@components/BurguerMenu";
import Image from "next/image";
import { useState } from "react";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav className="flex items-center h-20 sticky top-0 z-50 bg-white explode-width-navbar">
        <ul className="flex items-center w-full h-full p-4 text-accent text-md font-medium">
          <li>
            <Link href="/" className="font-bold text-xl m-0 p-0">
              <Image
                src="/images/logo.svg"
                height={40}
                width={220}
                alt="AM Fernandes"
              />
            </Link>
          </li>
          <div className="hidden md:flex flex-grow justify-end w-full">
            <li>
              <Link href="/projetos">Projetos</Link>
            </li>
            <li>
              <Link href="/proposito">Propósito</Link>
            </li>
            <li>
              <Link href="/cliente">Portal do Cliente</Link>
            </li>
            <li>
              <Link href="/corretor">Portal do Corretor</Link>
            </li>
          </div>
          <div className="flex md:hidden flex-grow justify-end">
            <BurguerMenu open={isMenuOpen} setOpen={setIsMenuOpen} />
          </div>
        </ul>
      </nav>
      <nav
        className={`flex transition-all md:hidden fixed w-[320px] h-full bg-white z-40 right-0 py-[80px] rounded-bl-2xl

 translate-x-80 ${isMenuOpen && "open"}`}
      >
        <ul className="flex flex-col items-center w-full h-full . p-4 text-accent text-md font-medium">
          <li className="py-3">
            <Link href="/projetos">Projetos</Link>
          </li>
          <li className="py-3">
            <Link href="/proposito">Propósito</Link>
          </li>
          <li className="py-3">
            <Link href="/cliente">Portal do Cliente</Link>
          </li>
          <li className="py-3">
            <Link href="/corretor">Portal do Corretor</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default NavBar;
