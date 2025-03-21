import React from "react";
import { Unbounded, Inter } from "next/font/google";
import piggystarklogo from "@assets/piggystarklogo.svg";
import Image from "next/image";
import { navItems } from "app/constants/navitems";
import { Button } from "./ui/button";

const unbounded = Unbounded({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full h-16 px-16 pt-12 ">
      {/* logo */}
      <div className="flex items-center w-fit h-fit gap-3">
        <Image src={piggystarklogo} alt="logo" width={24} height={24} />
        <p className={`font-bold text-[20px] ${unbounded.className} `}>
          PIGGYSTARK
        </p>
      </div>

      <nav>
        <ul
          className={` ${inter.className} text-white flex gap-12 text-[16px] `}
        >
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.href}> {item.name} </a>
            </li>
          ))}
        </ul>
      </nav>

      <Button />
    </div>
  );
};

export default Navbar;
