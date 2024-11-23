import React from "react";
import ProjectBanner from "./ProjectBanner";
// import ProjectInfo from "./ProjectInfo";
import ProjectGallery from "./ProjectGallery";

interface Project {
  id: number;
  name: string;
  // client_information?: string;
  location: string;
  description: string;
  start_date: string;
  status: string;
}

const ProjectDetail = ({project}: { project: Project | null }) => {

  if (!project) {
    return (
      <div className="container">
        <p>Project details are not available.</p>
      </div>
    );
  }
  return (
    <>
      <div className="container">
        <div>
          <ProjectBanner />
        </div>
        <div className="pb-20">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/3">
              <div className="bg-[#1D1D25] text-white py-8 px-9">
                <h5 className="text-2xl font-bold tracking-wider mb-5">
                  Project Information
                </h5>
                <ul>
                  <li className="text-sm border-b border-b-gray-600 mb-4 pb-3">
                    <strong className="inline-flex w-20">Client:</strong>
                    {/* <span>{project.client_information || "N/A"}</span> */}
                  </li>
                  <li className="text-sm border-b border-b-gray-600 mb-4 pb-3">
                    <strong className="inline-flex w-20">Location:</strong>
                    <span>{project.location || "N/A"}</span>
                  </li>
                  <li className="text-sm border-b border-b-gray-600 mb-4 pb-3">
                    <strong className="inline-flex w-20">Area(sf):</strong>
                    <span> 550,000 sf</span>
                  </li>
                  <li className="text-sm border-b border-b-gray-600 mb-4 pb-3">
                    <strong className="inline-flex w-20">Year:</strong>
                    <span>{new Date(project.start_date).getFullYear()}</span>
                  </li>
                  <li className="text-sm border-b border-b-gray-600 mb-4 pb-3">
                    <strong className="inline-flex w-20">Budget:</strong>
                    <span> $245000000 </span>
                  </li>
                  <li className="text-sm border-b border-b-gray-600 mb-4 pb-3">
                    <strong className="inline-flex w-20">Architect:</strong>
                    <span> Scott & Austin </span>
                  </li>
                  <li className="text-sm">
                    <strong className="inline-flex w-20">Sector:</strong>
                    <span> Tunnel, Transport </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-4xl font-bold text-main-color">
              {project.name}
              </h2>
              <div>
                <p className="text-[#1D1D1D] leading-[1.7] mt-4">
                {project.description}
                </p>
                {/* <p className="text-[#1D1D1D] leading-[1.7] mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                  cum fugit officia dolores eligendi, rem. Quibusdam quasi
                  impedit perspiciatis iure maiores, eaque numquam doloremque,
                  quo nam soluta itaque obcaecati tempore!.
                </p>
                <p className="text-[#1D1D1D] leading-[1.7] mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolore ex, nam adipisci dolores laborum earum. Unde cum, ut
                  nostrum nihil alias, laudantium molestiae, vitae quidem
                  dolorem officiis ipsum. Aliquid nemo consequuntur cupiditate
                  delectus sapiente doloribus dolorem, at suscipit, non
                  laudantium mollitia magnam repellat atque quia! Aut, veniam,
                  nam. Ex porro optio facilis nostrum, qui ipsa?
                </p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="pb-20">
          <ProjectGallery />
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
