

import Image from "next/image"

export default function HeroServices() {
    return (
        <main className="min-h-screen bg-base-900">
            <div className="max-w-screen-xl mx-auto">
                <div className="lg:p-8 md:p-6 p-4">
                    <div className="py-8 flex items-center justify-start">
                        <h2 className="text-2xl lg:text-4xl md:text-3xl sm:text-3xl font-semibold uppercase text-neutral-950">
                            Services
                        </h2>
                    </div>
                    <div className="flex justify-center">
                        <div className="carousel carousel-vertical rounded-box h-96">
                            <div className="carousel-item h-full">
                                <Image
                                    src="/services/stockimage.webp"
                                    alt="service One"
                                    width={540}
                                    height={420} />
                            </div>
                            <div className="carousel-item h-full">
                                <Image
                                    src="/services/stockimage.webp"
                                    alt="service One"
                                    width={540}
                                    height={420} />
                            </div>
                            <div className="carousel-item h-full">
                                <Image
                                    src="/services/stockimage.webp"
                                    alt="service One"
                                    width={540}
                                    height={420} />
                            </div>
                            <div className="carousel-item h-full">
                                <Image
                                    src="/services/stockimage.webp"
                                    alt="service One"
                                    width={540}
                                    height={420} />
                            </div>
                            <div className="carousel-item h-full">
                                <Image
                                    src="/services/stockimage.webp"
                                    alt="service One"
                                    width={540}
                                    height={420} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}