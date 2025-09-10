import Link from "next/link";
import { IoMailOutline, IoCallOutline } from "react-icons/io5";

// A single source of truth for your contact details.
const contactInfo = [
    {
        icon: <IoMailOutline size={20} />,
        label: "sales@akeenahgroup.com",
        href: "mailto:sales@akeenahgroup.com",
        type: "email kenya",
    },
    {
        icon: <IoMailOutline size={20} />,
        label: "info@akeenahgroup.com",
        href: "mailto:info@akeenahgroup.com",
        type: "email global",
    },
    {
        icon: <IoMailOutline size={20} />,
        label: "salesdrc@akeenahgroup.com",
        href: "mailto:salesdrc@akeenahgroup.com",
        type: "email drc",
    },
    {
        icon: <IoCallOutline size={20} />,
        label: "Kenya: +254 734 438438",
        href: "tel:+254734438438",
        type: "phone kenya",
    },
    {
        icon: <IoCallOutline size={20} />,
        label: "DR Congo: +243 823 179730",
        href: "tel:+243823179730",
        type: "phone drc",
    },
];

export default function ContactCTA() {
    return (
        <section className="bg-neutral-900 text-neutral-100 py-16 sm:py-24">
            <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
                {/* Main CTA Section */}
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-4 text-white">
                        Ready to take the next step?
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg text-gray-400 max-w-2xl">
                        Explore our full range of products and services tailored to your needs
                        and let us help you achieve your business goals.
                    </p>
                    <Link
                        href="/contact-us"
                        className="mt-8 inline-flex items-center justify-center px-8 py-4 text-base md:text-lg font-semibold rounded-md bg-white text-gray-900 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
                    >
                        Contact Us Today
                    </Link>
                </div>

                {/* Contact Information Grid */}
                <div className="bg-neutral-800 rounded-xl p-8 lg:p-12">
                    <h3 className="text-neutral-50 font-semibold text-xl uppercase mb-6 text-center">
                        Our Contact Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {contactInfo.map((contact, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <div className="p-3 bg-neutral-700 rounded-full text-white">
                                    {contact.icon}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm text-neutral-400 uppercase font-semibold">
                                        {contact.type}
                                    </span>
                                    <Link
                                        href={contact.href}
                                        className="text-neutral-100 text-lg font-medium hover:text-red-500 transition-colors"
                                    >
                                        {contact.label}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}