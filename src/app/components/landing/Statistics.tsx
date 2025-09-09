


const stats = [
    { itemOne: "6+", itemTwo: "Years in Business", itemThree: "Creating the successful delivery path" },
    { itemOne: "420+", itemTwo: "Happy Clients", itemThree: "In last 7 years" },
    { itemOne: "5000+ ", itemTwo: "Successful Deliveries", itemThree: "To the date" },
    { itemOne: "14+", itemTwo: "Team members", itemThree: "Working towards your success" },
]


export default function Statistics() {
    return (
        <main className="bg-base-content text-base-content">
            <div>
                <div className="max-w-screen-xl mx-auto p-4">
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