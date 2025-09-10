"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface PartnershipCarouselProps {
    brands: string[];
}

const PartnershipCarouselReversed: React.FC<PartnershipCarouselProps> = ({ brands }) => {
    const [displayedBrands, setDisplayedBrands] = useState<string[]>([]);

    const placeholderBrands = [
        "/products/anest-iwata.png",
        "/products/britannia-fire-logo.png",
        "/products/chicagopneumatic.png",
        "/products/chromagen.png",
        "/products/desoutter.png",
        "/products/tensionpro.png",
    ];

    useEffect(() => {
        const brandsToDisplay = brands.length > 0 ? brands : placeholderBrands;
        // Repeat twice for infinite scroll effect
        setDisplayedBrands([...brandsToDisplay, ...brandsToDisplay]);
    }, [brands]);

    if (displayedBrands.length === 0) return null;

    return (
        <div className="w-full overflow-hidden py-6 relative bg-white">
            <style>
                {`
          @keyframes slide-scroll {
            100% {
              transform: translateX(-50%);
            }
            0% {
              transform: translateX(0%);
            }
          }
        `}
            </style>

            <div
                className="flex gap-4 animate-[slide-scroll_30s_linear_infinite]"
                style={{
                    width: `${(displayedBrands.length / 2) * 160}px`,
                }}
            >
                {displayedBrands.map((brandUrl, index) => (
                    <div
                        key={index}
                        className="flex-none w-[120px] sm:w-[140px] md:w-[160px] h-[60px] sm:h-[70px] md:h-[80px] rounded-lg shadow-md bg-white flex items-center justify-center overflow-hidden"
                    >
                        <Image
                            src={brandUrl}
                            alt={`Partner ${index + 1}`}
                            className="object-contain w-full h-full p-2"
                            width={200}
                            height={200}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

const PartnershipCarousel: React.FC<PartnershipCarouselProps> = ({ brands }) => {
    const [displayedBrands, setDisplayedBrands] = useState<string[]>([]);

    const placeholderBrands = [
        "/products/egamaster.png",
        "/products/enerpac.png",
        "/products/hellermantyton.png",
        "/products/hifi-filter.png",
        "/products/jinko.png",
        "/products/rolecev.png",
        "/products/scmsolarcleaning.png",
    ];

    useEffect(() => {
        const brandsToDisplay = brands.length > 0 ? brands : placeholderBrands;
        // Repeat twice for infinite scroll effect
        setDisplayedBrands([...brandsToDisplay, ...brandsToDisplay]);
    }, [brands]);

    if (displayedBrands.length === 0) return null;

    return (
        <div className="w-full overflow-hidden py-6 relative bg-white">
            <style>
                {`
          @keyframes slide-scroll {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
            </style>

            <div
                className="flex gap-4 animate-[slide-scroll_30s_linear_infinite]"
                style={{
                    width: `${(displayedBrands.length / 2) * 160}px`,
                }}
            >
                {displayedBrands.map((brandUrl, index) => (
                    <div
                        key={index}
                        className="flex-none w-[120px] sm:w-[140px] md:w-[160px] h-[60px] sm:h-[70px] md:h-[80px] rounded-lg shadow-md bg-white flex items-center justify-center overflow-hidden"
                    >
                        <Image
                            src={brandUrl}
                            alt={`Partner ${index + 1}`}
                            className="object-contain w-full h-full p-2"
                            width={200}
                            height={200}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default function PartnershipCard() {
    const brandLogosReversed = [
        "/products/anest-iwata.png",
        "/products/britannia-fire-logo.png",
        "/products/chicagopneumatic.png",
        "/products/chromagen.png",
        "/products/desoutter.png",
        "/products/tensionpro.png",
    ];
    const brandLogos = [
        "/products/egamaster.png",
        "/products/enerpac.png",
        "/products/hellermantyton.png",
        "/products/hifi-filter.png",
        "/products/jinko.png",
        "/products/rolecev.png",
        "/products/scmsolarcleaning.png",
    ];

    return (
        <section className="w-full px-4">
            <div className="max-w-screen-xl mx-auto flex flex-col gap-y-2 space-y-2 lg:px-12 md:px-4 ">
                <PartnershipCarouselReversed brands={brandLogosReversed} />
                <PartnershipCarousel brands={brandLogos} />
            </div>
        </section>
    );
}
