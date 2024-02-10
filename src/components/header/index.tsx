"use client";
import { AuthContext } from "@/contexts/AuthContext";
import Link from "next/link";
import React, { useContext } from "react";
import { FiLogOut } from "react-icons/fi";

const Header = () => {
  const { signOut } = useContext(AuthContext);

  return (
    <header className="h-20">
      <div className="max-w-6xl h-20 my-0 mx-auto py-0 px-8 flex justify-between items-center">
        <Link href="d=/dashboard">
          <h2 className="font-mono font-bold text-white text-3xl tracking-tight cursor-pointer">
            Mesa<span className="text-cta">Master</span>
          </h2>
        </Link>
        <nav className="flex items-center text-white">
          <Link
            href="/category"
            className="py-0 px-2 inline-block relative hover:text-cta duration-300"
          >
            Categoria
          </Link>
          <Link
            href="/product"
            className="py-0 px-2 inline-block relative ml-8 hover:text-cta duration-300"
          >
            Cardápio
          </Link>
        </nav>

        <button
          className="ml-8 bg-transparent border-none duration-300 hover:scale-125"
          onClick={signOut}
        >
          <FiLogOut color="#fff" size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
