
import Image from "next/image"
import Link from "next/link"
import { FaGlobeAfrica } from "react-icons/fa";


export default function Navbar() {
    return (
        <nav className="p-4 sticky top-0 z-50 shadow-md bg-white">
            <div className="max-w-screen-2xl mx-auto">
                <div className="flex items-center justify-between px-4">
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
                    <div className="hidden lg:items-center text-neutral-900 lg:flex md:flex sm:hidden">
                        <ul className="list-none flex flex-row text-md space-x-4">
                            <li>
                                <Link href="/products" className="font-semibold text-neutral-950 hover:text-red-700 uppercase">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="font-semibold text-neutral-950 hover:text-red-700 uppercase">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="font-semibold text-neutral-950 hover:text-red-700 uppercase">
                                    Industries
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="font-semibold text-neutral-950 hover:text-red-700 uppercase">
                                    Company
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="font-semibold text-neutral-950 hover:text-red-700 uppercase">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-end px-4">
                        <div className="flex items-center flex-row space-x-1 font-bold text-neutral-800 group hover:text-red-700">
                            <FaGlobeAfrica  size={24} />
                            <h2 className="text-lg uppercase font-bold ">KE</h2>
                        </div>
                    </div>
                </div>
            </div>

        </nav>
    )
}