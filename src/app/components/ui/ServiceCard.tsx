
import Link from "next/link";
import Image from "next/image";

type ServiceProps = {
    title: string;
    statement: string;
    url: string;
    link: string;
}

export default function ServiceCard({ title, statement, url, link }: ServiceProps) {
    return (
        <Link href={link} className="flex items-center justify-center lg:py-10 md:py-8 py-6">
            <div className="group bg-white border border-neutral-200 rounded-2xl p-6 lg:p-8 max-w-screen-3xl w-full shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-10 space-y-6 lg:space-y-0 lg:h-84 md:h-72">
                    {/* Text Content */}
                    <div className="flex flex-col space-y-4 lg:w-1/2">
                        <h2 className="text-xl lg:text-3xl md:text-2xl font-bold uppercase text-red-800">
                            {title}
                        </h2>
                        <p className="text-base lg:text-lg text-neutral-950">
                            {statement}
                        </p>
                    </div>
                    {/* Image */}
                    <div className="relative flex justify-center lg:w-1/2">
                        <div className="overflow-hidden rounded-xl shadow-md w-full max-w-md">
                            <Image
                                src={url}
                                alt={`${title} image`}
                                width={560}
                                height={420}
                                className="rounded-xl object-cover w-full aspect-video transform group-hover:scale-105 transition-transform duration-500"
                                priority={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
