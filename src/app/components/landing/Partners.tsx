

import PartnershipCard from "../ui/PartnershipCard";


export default function Partners() {
    return (
        <main className="lg:py-16 md:py-12 py-8 bg-base-900 text-base-content">
            <div className="max-w-screen-xl mx-auto">
                <div className="lg:p-8 md:p-6 p-4">
                    <div className="py-6 flex items-center justify-start">
                        <h2 className="text-2xl lg:text-4xl md:text-3xl sm:text-3xl font-semibold uppercase text-neutral-950">
                            Partners
                        </h2>
                    </div>
                    <div className="lg:py-8 py-6">
                        <PartnershipCard />
                    </div>
                </div>
            </div>
        </main>
    )
}