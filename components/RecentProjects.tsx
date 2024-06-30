import { projects } from "@/data";
import React from "react";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import { PinContainer } from "./ui/pin";
import { iconsList } from "@tabler/icons-react";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent Projects</span>
      </h1>
      <div
        className="flex flex-wrap items-center
      justify-center p-4 gap-16 mt-10
      "
      >
        {projects.map(({ id, title, des, img, iconLists, link, live }) => (
          <div
            key={id}
            className="lg:mmin-h-[32.5]
          h-[25rem] flex items-center justify-center
          sm:w-96 w-[80vw]
          "
          >
            <PinContainer title={link} href={link}>
              <a href={link} target="_blank">
                {" "}
                {/* if error comes modify or delete this a tag*/}
                <div
                  className="realtive flex items-center 
                justify-center sm:w-96 w-[80vw]
                overflow-hidden h-[20vh] lg:h-[30vh]
                mb-10
                "
                >
                  <div
                    className="relative w-full h-full 
                overflow-hidden lg:rounded-3xl bg-[#13162d]
                "
                  >
                    <img src="/bg.png" alt="bg-img" />
                    <img
                      src={img}
                      alt={title}
                      className="z-10 absolute bottom-0"
                    />
                  </div>
                </div>
                <h1
                  className="font-bold lg:text-2xl
              md:text-xl text-base line-clamp-1
              "
                >
                  {title}
                </h1>
                <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                  {des}
                </p>
              </a>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full
                      bg-black lg:w-10 lg:h-10  w-8 h-8 
                      flex justify-center items-center
                      "
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
                <a href={live} target="_blank">
                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple hover:text-green-500">
                      Check Live Site
                    </p>
                    <FaLocationArrow
                      className="ms-3 hover:fill-lime-500"
                      color="#CBACF9"
                    />
                  </div>
                </a>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
