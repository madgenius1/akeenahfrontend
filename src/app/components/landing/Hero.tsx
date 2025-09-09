'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { HiOutlineArrowCircleLeft, HiOutlineArrowCircleRight } from 'react-icons/hi';
import { motion, AnimatePresence } from 'motion/react';

interface ILink {
    text: string;
    href: string;
}

interface ISlide {
    id: number;
    bgUrl: string;
    title: string;
    subtitle: string;
    links: ILink[];
}

const slides: ISlide[] = [
    {
        id: 0,
        bgUrl: '/assets/industries.webp',
        title: 'Akeenah Group',
        subtitle: "Africa's Leading Industrial Procurement and Supply Company",
        links: [
            { text: 'Browse Our Products', href: '/products' },
            { text: 'About Us', href: '/company' },
        ],
    },
    {
        id: 1,
        bgUrl: '/sectors/mining.webp',
        title: 'Mining Industry',
        subtitle: 'Innovative and reliable solutions for your mining needs.',
        links: [
            { text: 'Explore Mining Products', href: '/sectors/mining' },
            { text: 'Contact Us', href: '/contact' },
        ],
    },
    {
        id: 2,
        bgUrl: '/sectors/vehicleassembly.webp',
        title: 'Vehicle Assembly',
        subtitle: 'We supply quality products to the Vehicle Assembly sector.',
        links: [
            { text: 'Vehicle Assembly', href: '/sectors/vehicleassembly' },
            { text: 'Get a Quote', href: '/quote' },
        ],
    },
    {
        id: 3,
        bgUrl: '/sectors/powergeneration.webp',
        title: 'Power Generation',
        subtitle: 'Quality assured products for power and electricity generation.',
        links: [
            { text: 'Power Generation', href: '/sectors/powergeneration' },
            { text: 'Explore More', href: '/sectors/powergeneration' },
        ],
    },
];

export default function Hero() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState<1 | -1>(1); // 1 = next, -1 = prev

    const handleNext = useCallback(() => {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % slides.length);
    }, []);

    const handlePrev = useCallback(() => {
        setDirection(-1);
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(handleNext, 5000);
        return () => clearInterval(timer);
    }, [handleNext]);

    // Slide variants
    const variants = {
        enter: (dir: number) => ({
            x: dir > 0 ? '100%' : '-100%',
            opacity: 1,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
        },
        exit: (dir: number) => ({
            x: dir > 0 ? '-100%' : '100%',
            opacity: 1,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
        }),
    };

    return (
        <main className="relative min-h-screen w-full overflow-hidden font-sans" aria-live="polite">
            <div className="relative min-h-screen">
                <AnimatePresence custom={direction} initial={false} mode="popLayout">
                    <motion.div
                        key={slides[current].id}
                        className="absolute inset-0"
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                    >
                        {/* Background */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${slides[current].bgUrl})` }}
                        />
                        <div className="absolute inset-0 bg-black/60" />

                        {/* Content */}
                        <div className="relative z-10 flex min-h-screen items-center justify-start px-6 sm:px-10 lg:px-20">
                            <div className="max-w-3xl text-white space-y-6">
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase leading-tight">
                                    {slides[current].title}
                                </h1>
                                <p className="text-lg sm:text-xl lg:text-2xl font-medium">{slides[current].subtitle}</p>
                                <div className="flex flex-wrap gap-4 pt-4">
                                    {slides[current].links.map((link, idx) => (
                                        <Link
                                            key={idx}
                                            href={link.href}
                                            className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-base sm:text-lg font-medium px-5 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-white/20"
                                        >
                                            {link.text}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20">
                <button
                    onClick={handlePrev}
                    className="text-white hover:text-gray-300 transition-colors"
                    aria-label="Previous Slide"
                >
                    <HiOutlineArrowCircleLeft size={36} />
                </button>
                <button
                    onClick={handleNext}
                    className="text-white hover:text-gray-300 transition-colors"
                    aria-label="Next Slide"
                >
                    <HiOutlineArrowCircleRight size={36} />
                </button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 w-full flex justify-center gap-2 z-20">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            setDirection(idx > current ? 1 : -1);
                            setCurrent(idx);
                        }}
                        aria-label={`Go to slide ${idx + 1}`}
                        className={`w-3 h-3 rounded-full transition-all ${idx === current ? 'bg-white scale-110' : 'bg-white/40'
                            }`}
                    />
                ))}
            </div>
        </main>
    );
}
