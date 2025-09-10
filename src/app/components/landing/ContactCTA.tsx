import Link from "next/link";

export default function ContactCTA() {
    return (
        <div className="bg-gray-900 text-white py-16 md:py-20 lg:py-24">
            <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-screen-xl">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-4 text-neutral-50">
                            Ready to take the next step?
                        </h2>
                        <p className="text-sm md:text-base lg:text-lg text-gray-300">
                            Explore our full range of products and services tailored to your needs.
                        </p>
                    </div>

                    {/* CTA Button */}
                    <div className="flex-shrink-0 mt-4 lg:mt-0">
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center justify-center px-8 py-4 text-base md:text-lg font-semibold rounded-md bg-white text-gray-900 shadow-lg"
                        >
                            Contact Us Today
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}