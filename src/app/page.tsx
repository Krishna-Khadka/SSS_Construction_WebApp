import MottoCard from "@/components/mottoCard/MottoCard";


export default function Home() {
  return (
    <>
      <div className="container">
        <div className="bg-[#FF5E14] p-6 rounded-xl">
          <div className="flex justify-between items-center flex-wrap gap-3">
            <div>
              <h2 className="text-white font-semibold text-2xl">
                We are the leaders in Construction Industry!
              </h2>
            </div>
            <div>
              <button className="bg-[#272D33] text-white uppercase text-[14px] font-bold tracking-wide py-3 px-6">
                request quote
              </button>
            </div>
          </div>
        </div>
        <div className="py-16">
          <MottoCard />
        </div>
      </div>
    </>
  );
}
