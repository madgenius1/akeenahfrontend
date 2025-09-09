'use client'

import Image from "next/image"
import Link from "next/link"
import { RiMenu3Fill, RiCloseLargeFill } from "react-icons/ri";
import { FaGlobeAfrica } from "react-icons/fa";
import { useState } from "react";

const countries = [
    { code: "KE", name: "Kenya", languages: ["English", "Swahili"] },
    { code: "TZ", name: "Tanzania", languages: ["English", "Swahili"] },
    { code: "SN", name: "Senegal", languages: ["English", "Français"] },
    { code: "DR", name: "DR Congo", languages: ["English", "Français"] },
    { code: "ZM", name: "Zambia", languages: ["English", "Swahili"] },
];

export default function Navbar() {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const toggleDropDownOpen = () => setIsDropDownOpen(prev => !prev);

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

    const [selectedCountry, setSelectedCountry] = useState("KE");

    const handleSelect = (code: string) => {
        setSelectedCountry(code);
        setIsDropDownOpen(false);
    };

    return (
        <nav className="p-4 sticky top-0 z-50 shadow-md bg-white">
            <div className="max-w-screen-2xl mx-auto">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex justify-start">
                        <Link href="/">
                            <Image
                                src="/assets/akeenahlogo.png"
                                alt="akeenah company logo"
                                width={100}
                                height={50}
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex md:flex sm:hidden text-neutral-900">
                        <ul className="list-none flex flex-row text-md space-x-4">
                            <li><Link href="/products" className="font-semibold hover:text-red-700 uppercase">Products</Link></li>
                            <li><Link href="/services" className="font-semibold hover:text-red-700 uppercase">Services</Link></li>
                            <li><Link href="/sectors" className="font-semibold hover:text-red-700 uppercase">Industries</Link></li>
                            <li><Link href="/company" className="font-semibold hover:text-red-700 uppercase">Company</Link></li>
                            <li><Link href="/contact" className="font-semibold hover:text-red-700 uppercase">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Dropdown Button */}
                    <div className="flex justify-end space-x-2">
                        <button
                            onClick={toggleDropDownOpen}
                            aria-label="Toggle drop down"
                            className="cursor-pointer flex items-center flex-row space-x-1 font-bold text-neutral-800 hover:text-red-700"
                        >
                            <FaGlobeAfrica size={24} />
                            <h2 className="text-lg uppercase font-bold">{selectedCountry}</h2>
                        </button>
                        <div className="md:hidden">
                            <button
                                onClick={toggleMobileMenu}
                                aria-label="Toggle mobile menu"
                                className="p-2 rounded-md hover:bg-gray-200 focus:outline-none"
                            >
                                {isMobileMenuOpen ? (
                                    <RiCloseLargeFill size={30} className="text-neutral-800" />
                                ) : (
                                    <RiMenu3Fill size={30} className="text-neutral-800" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}

                </div>
            </div>

            {/* Dropdown Menu */}
            <div
                className={`fixed top-0 right-0 h-auto w-50% bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${isDropDownOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <ul className="flex flex-col p-6 space-y-4 list-none">
                    {countries.map((country) => (
                        <li key={country.code} className="flex flex-col gap-2">
                            <span className="font-medium text-neutral-900">{country.name}</span>
                            <div className="flex flex-row space-x-2">
                                {country.languages.map((lang) => (
                                    <button
                                        key={lang}
                                        onClick={() => handleSelect(country.code)}
                                        className="hover:text-red-800 text-sm"
                                    >
                                        {lang}
                                    </button>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Menu */}
            <div
                className={`absolute left-0 w-full transition-all duration-300 ease-in-out md:hidden bg-neutral-500 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-lg ${isMobileMenuOpen
                    ? 'top-full opacity-100 visible'
                    : '-top-96 opacity-0 invisible'
                    }`}
            >
                <ul className="flex flex-col p-6 space-y-4 list-none">
                    <li><Link href="/products" className="block px-4 py-2 font-semibold hover:bg-gray-200 rounded-md" onClick={toggleMobileMenu}>Products</Link></li>
                    <li><Link href="/services" className="block px-4 py-2 font-semibold hover:bg-gray-200 rounded-md" onClick={toggleMobileMenu}>Services</Link></li>
                    <li><Link href="/sectors" className="block px-4 py-2 font-semibold hover:bg-gray-200 rounded-md" onClick={toggleMobileMenu}>Sectors</Link></li>
                    <li><Link href="/resources" className="block px-4 py-2 font-semibold hover:bg-gray-200 rounded-md" onClick={toggleMobileMenu}>Resources</Link></li>
                    <li><Link href="/about-us" className="block px-4 py-2 font-semibold hover:bg-gray-200 rounded-md" onClick={toggleMobileMenu}>About Us</Link></li>
                    <li><Link href="/contact" className="block px-4 py-2 font-semibold hover:bg-gray-200 rounded-md" onClick={toggleMobileMenu}>Contact Us</Link></li>
                    <li><Link href="/terms" className="block px-4 py-2 font-semibold hover:bg-gray-200 rounded-md" onClick={toggleMobileMenu}>Terms & Conditions</Link></li>
                </ul>
            </div>
        </nav>
    )
}
