import Link from "next/link";
import "./styles.css";
import BurguerMenu from "@components/BurguerMenu";
import Image from "next/image";

function NavBar() {
  return (
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
          <BurguerMenu />
        </div>
      </ul>
    </nav>
  );
}
export default NavBar;
