"use client"
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-background shadow sticky top-0 z-50 font-Shubbak">
      <div className="w-full flex justify-between items-center px-4">
        <div className="sm:hidden"></div>
        {/* Logo */}
        <div>
          <div className="flex flex-row-reverse sm:flex-row items-center">
            <img src="/images/logo.svg" alt="logo image" className="w-16 h-14 rounded-full" />
            <h1 className="text-lg md:text-xl font-bold text-textPrimary">شركه اير كوول لخدمات المكيفات</h1>
          </div>
        </div>
        {/* Hamburger Icon */}
        <button
          className="sm:hidden focus:outline-none opacity-[72%]"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex">
          <ul className="flex space-x-6 text-sm md:text-base">
          <li>
              <a href="#" className="hover:text-textSecondary">
                الرئيسية
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-textSecondary">
                الخدمات
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-textSecondary">
                تقيمات
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-textSecondary">
                تواصل معنا
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation - Slide-In */}
      <div
        className={`fixed top-0 right-0 h-full w-[13rem] bg-background shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out sm:hidden z-40`}
      >
        <button
          className="absolute top-4 right-4 text-textPrimary opacity-[72%] hover:text-textSecondary focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <nav className="mt-16 px-6">
          <ul className="flex flex-col items-center space-y-4 text-textPrimary text-bold">
            <li>
              <a href="#" className="hover:text-textSecondary" onClick={toggleMenu}>
                الرئيسية
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-textSecondary" onClick={toggleMenu}>
                الخدمات
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-textSecondary" onClick={toggleMenu}>
                تقيمات
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-textSecondary" onClick={toggleMenu}>
                تواصل معنا
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-overlay sm:hidden z-30"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
}
