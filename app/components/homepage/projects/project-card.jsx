// @flow strict

import * as React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full text-white font-sans">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>

      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl font-semibold">
          {project.name}
        </p>
      </div>

      {/* Two-column layout starts here */}
      <div className="border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Side: Content */}
          <div className="w-full lg:w-1/2 space-y-2">
            <div>
              <p className="font-semibold text-sm lg:text-base">Name:</p>
              <p className="text-amber-300">{project.name}</p>
            </div>

            <div>
              <p className="font-semibold text-sm lg:text-base">Tools:</p>
              <p className="text-amber-300">
                {project.tools.join(', ')}
              </p>
            </div>

            <div>
              <p className="font-semibold text-sm lg:text-base">Role:</p>
              <p className="text-orange-400">{project.role}</p>
            </div>

            <div>
              <p className="font-semibold text-sm lg:text-base">Description:</p>
              <p className="text-cyan-400 text-justify">{project.description}</p>
            </div>
          </div>

          {/* Right Side: Demo */}
          {project.demo && project.demoLink && (
            <div className="w-full lg:w-1/2">
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.demo}
                  alt={`${project.name} demo`}
                  className="w-full h-auto rounded-md mb-4 hover:opacity-90 transition"
                />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
