


const stats = [
    { itemOne: "6+", itemTwo: "Years in Business", itemThree: "Creating the successful delivery path" },
    { itemOne: "420+", itemTwo: "Happy Clients", itemThree: "In last 7 years" },
    { itemOne: "5000+ ", itemTwo: "Successful Deliveries", itemThree: "To the date" },
    { itemOne: "14+", itemTwo: "Team members", itemThree: "Working towards your success" },
]


export default function Statistics() {
    return (
        <main className="bg-base-900 text-base-content">
            <div className="lg:p-8 md:p-6 p-4">
                <div className="max-w-screen-xl mx-auto p-4">
                    <h3 className="text-start text-neutral-800 dark:text-neutral-200 font-bold lg:text-4xl text-2xl">
                        Track Record
                    </h3>
                    <p className="lg:text-xl text-sm pt-4 text-neutral-700 font-medium leading-relaxed max-w-3xl">
                        Our numbers speak for themsleves. <br />
                        We have track record for deliverying quality products and services.
                    </p>
                    <hr className="my-10 border-gray-400" />

                    <div className=" py-2 grid grid-cols-1 gap-8 mt-6 text-center lg:my-10 sm:gap-x-8 lg:grid-cols-4 md:grid-cols-2">
                        {stats.map((stat, index) => (
                            <div key={index}>
                                <h3 className="font-bold text-5xl text-neutral-950 ">
                                    <span className=" bg-clip-text ">{stat.itemOne}</span>
                                </h3>
                                <p className="mt-4 text-xl font-semibold text-gray-800">{stat.itemTwo}</p>
                                <p className="text-base mt-0.5 font-medium text-neutral-600">{stat.itemThree}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}