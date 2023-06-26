import React from 'react';
import { useRouter } from 'next/router';
import WorkData from '../../components/Projects.json';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';
import { IoLogoGithub } from 'react-icons/io';
import ReactPlayer from 'react-player';

const Project = () => {
    const router = useRouter();
    const { project } = router.query;
    const allProjects = WorkData.Work;

    // Find the project that matches the given ID
    const selectedProject = allProjects.find((item) => item.name === project);

    // Return null or a loading indicator while the data is being fetched
    if (!selectedProject) {
        return null; // or <div>Loading...</div>
    }

    // Destructure the selectedProject object to access its properties
    const { name, description, link } = selectedProject;

    return (
        <div className='no-cursor'>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:flex lg:flex-wrap">
                        <ReactPlayer
                            alt="video-sample"
                            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                            url={selectedProject.video}
                            height="auto"
                            width="100%"
                            controls={true}
                        />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
                                Project Name
                            </h2>
                            <h1 className="text-white text-3xl title-font font-medium mb-1">
                                {selectedProject.name}
                            </h1>
                            <div className="flex mb-4 space-x-4">
                                <a
                                    className="text-gray-500 no-cursor"
                                    href={selectedProject.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <IoLogoGithub className="text-white" size={35} />
                                </a>
                                <a
                                    className="text-gray-500 no-cursor"
                                    href={selectedProject.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <BsFillArrowUpRightCircleFill className="text-white" size={35} />
                                </a>
                            </div>
                            <p className="leading-relaxed text-gray-400 text-lg">
                                {selectedProject.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Project;
