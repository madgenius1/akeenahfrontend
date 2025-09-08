import ServiceCard from "../ui/ServiceCard";

const services = [
    {
        title: "Tools Sales & Rentals",
        statement: "We are a distributor and representative of quality tools and equipment. All items in our catalog are available for both sale and flexible rental options.",
        url: "/services/sales-rentals.jpg"
    },
    {
        title: "Training & Certification",
        statement: "We provide and facilitate comprehensive training in a proper and safe environment, delivered by a pool of highly trained and experienced professionals.",
        url: "/services/training.jpg"
    },
    {
        title: "Repair & Maintenance",
        statement: "Our team of skilled technicians conducts regular maintenance, identifies faults, and performs fast, reliable, and guaranteed repairs to keep your equipment running smoothly.",
        url: "/services/repair.jpg"
    },
    {
        title: "Tool Calibration",
        statement: "We offer professional calibration services for all types of equipment. Our in-house equipment is valid, approved, and renewed annually, with each service including a test and calibration certificate.",
        url: "/services/calibration.jpg"
    },
    {
        title: "On-site Installations",
        statement: "We facilitate and perform on-site installations and services in partnership with our trusted OEM (Original Equipment Manufacturer) partners.",
        url: "/services/installation.jpg"
    },
];

export default function HeroServices() {
    return (
        <main className="min-h-screen bg-base-content">
            <div className="max-w-screen-xl mx-auto">
                <div className="lg:p-8 md:p-6 p-4">
                    <div className="py-6 flex items-center justify-start">
                        <h2 className="text-2xl lg:text-4xl md:text-3xl sm:text-3xl font-semibold uppercase text-neutral-950">
                            Services
                        </h2>
                    </div>
                    <div className="flex justify-center">
                        <div className="carousel carousel-vertical w-full max-h-[80vh] rounded-box">
                            {services.map((service, index) => (
                                <div key={index} className="carousel-item h-full w-full">
                                    <ServiceCard
                                        title={service.title}
                                        statement={service.statement}
                                        url={service.url}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}