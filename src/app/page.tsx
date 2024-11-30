import Choose from "@/components/choose/Choose";
import Counter from "@/components/counter/Counter";
import Hero from "@/components/hero/Hero";
import HomeAbout from "@/components/homeAbout/HomeAbout";
import Insight from "@/components/insight/Insight";
import MottoCard from "@/components/mottoCard/MottoCard";
import Newsletter from "@/components/newsletter/Newsletter";
import Project from "@/components/project/Project";
import Testimonial from "@/components/testimonial/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="py-20">
        <div>
          {/* <div className="bg-main-color p-6 rounded-xl">
            <div className="flex justify-between items-center flex-wrap gap-3">
              <div>
                <h2 className="text-white font-semibold text-2xl">
                  We are the leaders in Construction Industry!
                </h2>
              </div>
              <div>
                <button className="bg-[#0E121D] transition-all duration-700 hover:bg-secondary-color text-white uppercase text-[14px] font-bold tracking-wide py-3 px-6">
                  request quote
                </button>
              </div>
            </div>
          </div> */}
          <div>
            <MottoCard />
          </div>
        </div>
      </div>
      <div>
        <HomeAbout />
      </div>
      <div>
        <Choose />
      </div>

      <div>
        <Counter />
      </div>
      <div>
        <Project />
      </div>
      <div>
        <Testimonial />
      </div>
      <div>
        <Newsletter/>
      </div>
    </>
  );
}
