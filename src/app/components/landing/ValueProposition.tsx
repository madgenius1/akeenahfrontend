import Image from "next/image"

export default function ValueProposition() {
    return (
        <section className="bg-base-900 text-base-content py-12 lg:py-20">
            <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:gap-12 items-start">
                    {/* Main Content Area */}
                    <div className="flex-1 w-full lg:w-2/3 max-w-2xl">
                        <h2 className="text-2xl lg:text-4xl font-bold uppercase text-neutral-950 mb-6">
                            Akeenah Group
                        </h2>
                        <div className="space-y-2 text-neutral-950 text-md lg:text-lg leading-relaxed">
                            <p>
                                <span className="font-semibold">AKEENAH Group</span> is your premier partner for industrial procurement and market entry across Africa. We provide a seamless gateway into key markets, including:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>
                                    <span className="font-semibold">East Africa</span> via AKEENAH Kenya
                                </li>
                                <li>
                                    <span className="font-semibold">Southern Africa</span> via AKEENAH DRC
                                </li>
                                <li>
                                    <span className="font-semibold">West Africa</span> via AKEENAH Senegal
                                </li>
                            </ul>
                            <p>
                                We empower businesses to capitalize on the massive economic, energy, and mineral potential within Africa's largest economic blocs.
                            </p>
                            <p className="mt-2">
                                As a proud member of the <span className="underline">British East Midlands Chamber of Commerce</span> and the <span className="underline">British Chamber of Commerce Association</span>, AKEENAH Group stands for reliability and trusted solutions.
                            </p>
                        </div>
                    </div>
                    {/* Image Area */}
                    <div className="w-full lg:w-1/3 mt-8 lg:mt-0 flex justify-center lg:justify-end">
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src="/assets/midlands.webp"
                                alt="East Midlands Chamber"
                                width={560}
                                height={420}
                                // layout="fill"
                                objectFit="cover"
                                priority={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}