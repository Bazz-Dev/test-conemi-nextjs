import React from "react";
import Link from "next/link";

function Header() {
  // ... other component logic (if any)

  return (
    <header className="flex items-center h-16 px-4 border-b border-gray-200 shrink-0 md:px-6 bg-white">
      <nav className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 text-gray-900">
        <Link
          className="flex items-center gap-2 text-lg font-semibold md:text-base text-gray-900"
          href="/"
        >
          <img src="../public/Logo-CONEMI.png" alt="../../" className="w-6 h-6" /> {/* Replace with your logo image path */}
          <span className="sr-only">Forms</span>
        </Link>
        <Link className="text-gray-900 " href="/ret7">
          <p>Ret7</p>
        </Link>
      </nav>
      
    </header>
  );
}
export default Header;
