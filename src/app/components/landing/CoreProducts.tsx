import Image from "next/image";
import Link from "next/link";

const coreProducts = [
    {
        name: "HellermannTyton",
        description:
            "Akeenah Group is licensed to supply HellermannTyton's products for fastening, fixing, identifying and protecting cables and their connecting components.",
        products: ["Cables Ties", "Insulation", "Electrical Installation", "RFID Tracking"],
        imageSrc: "/products/hellermantyton.webp",
        imageAlt: "HellermannTyton products for cable management.",
        link: "/products/hellermann-tyton",
    },
    {
        name: "Chicago Pneumatic",
        description:
            "Akeenah Group is a leading supplier of Chicago Pneumatic's power tools and compressors, known for their reliability and performance in industrial applications. We provide a wide range of tools for construction, automotive, and manufacturing industries.",
        products: ["Air Compressors", "Impact Wrenches", "Drills", "Grinders"],
        imageSrc: "/products/chicagopneumatic.webp",
        imageAlt: "Image of core product 2.",
        link: "/products/product-2",
    },
    {
        name: "Hifi Filter",
        description:
            "We supply an extensive range of filtration solutions from Hifi Filter, covering everything from air and oil filters to hydraulic and fuel filters. These products are crucial for maintaining machinery and ensuring clean, efficient operations across various sectors.",
        products: ["Air Filters", "Oil Filters", "Hydraulic Filters", "Fuel Filters"],
        imageSrc: "/products/hififilter.webp",
        imageAlt: "Image of core product 3.",
        link: "/products/product-3",
    },
];

export default function CoreProducts() {
    return (
        <main className="min-h-screen bg-base-900">
            <div className="max-w-screen-xl mx-auto">
                <div className="lg:p-8 md:p-6 p-4">
                    <div className="py-8 flex items-center justify-start">
                        <h2 className="text-2xl lg:text-4xl md:text-3xl sm:text-3xl font-semibold uppercase text-neutral-950">
                            Products
                        </h2>
                    </div>
                    <div className="flex flex-col space-y-6 gap-8 py-4">
                        {coreProducts.map((product, index) => (
                            <div
                                key={index}
                                className={`flex lg:flex-row md:flex-row justify-between py-6 border-b border-neutral-300 flex-col gap-8 ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                                    }`}
                            >
                                <div className="flex justify-center md:justify-start lg:justify-start flex-1">
                                    <Image
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        width={360}
                                        height={400}
                                    />
                                </div>
                                <div className="flex flex-col justify-start max-w-3xl space-y-4 flex-1">
                                    <h2 className="text-xl lg:text-3xl md:text-2xl sm:text-2xl font-semibold uppercase text-red-700">
                                        {product.name}
                                    </h2>
                                    <p
                                        className="text-sm lg:text-lg md:text-md text-neutral-900 tracking-wide leading-relaxed"
                                    > {product.description}</p>
                                    <span className="text-xl lg:text-2xl font-bold text-neutral-900">
                                        Products
                                    </span>
                                    <ul className="list-none flex flex-wrap text-sm gap-2">
                                        {product.products.map((item, i) => (
                                            <li
                                                key={i}
                                                className="p-2 bg-neutral-200 rounded hover:bg-primary-content font-medium text-neutral-800"
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        href={product.link}
                                        className="rounded-lg p-4 inline-block bg-neutral-900 hover:bg-neutral-700 text-neutral-100 hover:text-white transition-colors duration-200 w-fit"
                                    >
                                        Catalogue
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="py-6 my-6 flex items-center justify-center">
                        <Link
                            href="/products"
                            className="rounded-lg max-w-2xl p-4 inline-block bg-neutral-900 hover:bg-neutral-700 text-neutral-100 hover:text-white transition-colors duration-200 w-fit"
                        >
                            All Akeenah Products
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}