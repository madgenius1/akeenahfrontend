import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn, FaFacebookF, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-base-900 text-neutral-900 py-12 md:py-16">
            <div className="max-w-screen-xl mx-auto px-4 lg:px-6">
                {/* Call to Action Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-8 lg:p-10 bg-gray-100 rounded-xl mb-8">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed max-w-2xl">
                        Get access to our company profile and learn all about us.
                    </h2>
                    <Link
                        href="/resources"
                        className="w-full md:w-auto px-6 py-4 rounded-lg text-lg font-semibold text-center bg-neutral-900 text-neutral-100 hover:bg-neutral-700 transition-colors"
                    >
                        Company Profile
                    </Link>
                </div>

                <hr className="border-gray-300" />

                {/* Main Footer Content */}
                <div className="flex flex-col lg:flex-row justify-between gap-8 pt-8">
                    {/* Logo and Company Description */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-4">
                        <Link href="/">
                            <Image
                                src="/assets/akeenahlogo.png"
                                alt="Akeenah Company Logo"
                                width={120}
                                height={60}
                            />
                        </Link>
                        <p className="text-base lg:text-lg text-neutral-800">
                            A trusted procurement company for the African market, with a vast network of suppliers and manufacturers.
                        </p>
                        <ul className="flex items-center gap-4">
                            <li>
                                <Link href="#" className="text-2xl hover:text-red-700 transition-colors" aria-label="LinkedIn">
                                    <FaLinkedinIn />
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-2xl hover:text-red-700 transition-colors" aria-label="Facebook">
                                    <FaFacebookF />
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-2xl hover:text-red-700 transition-colors" aria-label="X Twitter">
                                    <FaXTwitter />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Navigation Links */}
                    <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-neutral-950 font-bold text-lg mb-4 uppercase">Company</h3>
                            <ul className="space-y-3">
                                <li><Link href="/about" className="text-neutral-800 hover:text-red-700">About Us</Link></li>
                                <li><Link href="/services" className="text-neutral-800 hover:text-red-700">Services</Link></li>
                                <li><Link href="/products" className="text-neutral-800 hover:text-red-700">Products</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-neutral-950 font-bold text-lg mb-4 uppercase">Quick Links</h3>
                            <ul className="space-y-3">
                                <li><Link href="/resources" className="text-neutral-800 hover:text-red-700">Resources</Link></li>
                                <li><Link href="/blog" className="text-neutral-800 hover:text-red-700">Blog</Link></li>
                                <li><Link href="/careers" className="text-neutral-800 hover:text-red-700">Careers</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-neutral-950 font-bold text-lg mb-4 uppercase">Support</h3>
                            <ul className="space-y-3">
                                <li><Link href="/faqs" className="text-neutral-800 hover:text-red-700">FAQs</Link></li>
                                <li><Link href="/contact" className="text-neutral-800 hover:text-red-700">Contact Us</Link></li>
                                <li><Link href="/privacy" className="text-neutral-800 hover:text-red-700">Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="border-gray-300 mt-8" />

                {/* Copyright Section */}
                <div className="py-6 text-center flex flex-col gap-y-4 text-sm md:text-base">
                    <p>
                        <strong className="text-neutral-800">Akeenah Group Limited</strong> © {currentYear} All Rights Reserved
                    </p>
                    <Link href="https://nickjuma.vercel.app/" target="blank">
                        A website by <strong className="text-neutral-800"> Juma</strong>
                    </Link>
                </div>
            </div>
        </footer>
    );
}