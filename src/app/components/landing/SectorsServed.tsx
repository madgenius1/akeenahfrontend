

import Link from "next/link";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

const sectorsList = [
    {
        title: "Mining",
        sectorId: "mining-sector",
        description:
            "We supply and procure high-quality parts and components essential for the mining industry. Our products, including heavy machinery parts, filtration systems, and electrical components, are designed for durability and performance in harsh environments.",
        image: "/sectors/mining.webp",
        size: "large",
    },
    {
        title: "Oil and Gas",
        sectorId: "oil-and-gas-sector",
        description:
            "We provide critical equipment and components for exploration, drilling, and refining. Our inventory includes specialized valves, pumps, seals, and pipeline components that meet stringent safety and quality standards.",
        image: "/sectors/offshoredrill.jpg",
        size: "small",
    },
    {
        title: "Construction and Civil Engineering",
        sectorId: "construction-civil-engineering-sector",
        description:
            "Our construction and civil engineering projects range includes structural materials, heavy equipment spares and safety gear, helping you complete projects efficiently and on schedule.",
        image: "/sectors/construction.jpg",
        size: "small",
    },
    {
        title: "Vehicle Assembly",
        sectorId: "vehicle-assembly-sector",
        description:
            "We support the vehicle assembly industry with a steady supply of high-grade automotive components. Our products ensure quality and reliability for your production lines.",
        image: "/sectors/vehicleassembly.webp",
        size: "small",
    },
    {
        title: "Power Generation",
        sectorId: "power-generation-sector",
        description:
            "We provide essential parts for thermal, hydro, and renewable energy plants. These include turbines, generators, transformers, and specialized parts for consistent and reliable power supply.",
        image: "/sectors/powergeneration.webp",
        size: "large",
    },
    {
        title: "Aviation",
        sectorId: "aviation-sector",
        description:
            "We offer a precise and reliable supply of aircraft support equipment. Our products adhere to strict quality and certification standards for flight safety and operational excellence.",
        image: "/sectors/aviation.webp",
        size: "small",
    },
];


export default function SectorsServed() {
    return (
        <main className="min-h-screen bg-base-content">
            <div className="max-w-screen-xl mx-auto">
                <div className="lg:p-8 md:p-6 p-4">
                    <div className="py-8 flex items-center justify-start">
                        <h2 className="text-2xl lg:text-4xl md:text-3xl sm:text-3xl font-semibold uppercase text-neutral-950">
                            Industries
                        </h2>
                    </div>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 
          auto-rows-[150px] md:auto-rows-[180px] lg:auto-rows-[220px]"
                    >
                        {sectorsList.map((area, index) => (
                            <Link
                                href={`/sectors/${area.sectorId}`}
                                key={index}
                                className={`relative overflow-hidden rounded-lg shadow-lg group
                ${area.size === "large" ? "md:col-span-2 lg:row-span-2 h-auto" : ""}
                ${area.size === "medium" ? "md:col-span-2 h-auto" : ""}
                ${area.size === "small" ? "h-full" : ""}
              `}
                            >
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${area.image})` }}
                                ></div>

                                <div className="absolute inset-0 bg-black opacity-60 group-hover:opacity-60 transition-opacity duration-300"></div>

                                <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="text-xl sm:text-2xl font-semibold tracking-tight pr-4 uppercase">
                                            {area.title}
                                        </h3>
                                        <HiOutlineArrowUpRight className="text-2xl sm:text-3xl transition-transform duration-300 group-hover:translate-x-1" />
                                    </div>

                                    <p className="text-sm sm:text-base leading-relaxed opacity-0 max-h-0 overflow-hidden transition-all duration-300 group-hover:opacity-100 group-hover:max-h-32 pb-2">
                                        {area.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}