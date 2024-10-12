import Accordion from "@/components/insight/Accordion";

const items = [
    {
        title: "What services does SSN Builders offer?",
        content:
            "We offer a wide range of construction services, including residential and commercial solutions, construction management, program management, and project consultation. We also specialize in new construction, remodeling, and various other services.",
    },
    {
        title: "Where does SSN Builders operate?",
        content:
            "We serve the Triangle Area, including Raleigh, Cary, Chapel Hill, Durham, and surrounding suburbs in North Carolina.",
    },
    {
        title: "What is SSN Builders' approach to project management?",
        content:
            "We prioritize planning, scheduling, quality assurance, and collaboration with subcontractors to ensure timely and successful project completion.",
    },
    {
        title: "Why choose SSN Builders?",
        content:
            "We are committed to precision, tailored solutions, timely delivery, and guaranteed customer satisfaction.",
    },
    {
        title: "How can I request a quote from SSN Builders?",
        content:
            "You can request a quote directly through our website by selecting the type of service you need and providing relevant project details.",
    },
];

const ContractorFaq = () => {
    return (
        <>
            <div className="container my-10">
                <h1 className="text-3xl text-center sm:text-center md:text-left font-bold mb-6">
                    Subcontractor Opportunities{" "}
                    <span className="text-main-color">(FAQ)</span>
                </h1>
                <Accordion items={items} />
            </div>
        </>
    )
}

export default ContractorFaq