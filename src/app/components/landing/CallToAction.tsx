import Image from "next/image";
import Link from "next/link";

export default function CallToAction() {
    return (
        <div className="lg:px-8 md:px-6 p-4 lg:py-16 md:py-12 relative w-full flex items-center justify-center">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/mining.png"
                    alt="Smiling woman looking at a laptop"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gray-800/70" />
            </div>

            <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 md:px-12 lg:px-16 text-white">
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
                    <div className="flex-1 max-w-2xl text-center lg:text-left">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-4">
                            Get full access to Akeenah&apos;s Catalogue
                        </h1>
                        <p className="text-sm md:text-base lg:text-lg">
                            Reach out to us for a quotation on our products.
                        </p>
                    </div>

                    {/* CTA Button */}
                    <div className="flex-shrink-0">
                        <Link
                            href="/contact"
                            className="rounded-lg px-6 py-3 inline-block bg-neutral-100 hover:bg-neutral-300 text-neutral-900 hover:text-neutral-950 transition-colors duration-200"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
