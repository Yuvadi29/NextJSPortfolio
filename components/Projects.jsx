import React, { useState } from 'react';
import WorkData from './Projects.json';
import Link from 'next/link';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div id='projects' className='w-full no-cursor'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <section className="text-gray-600 body-font overflow-hidden">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-20">
                            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">My Work</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Cause I can Make Something 😅</p>
                        </div>
                        <div className="flex flex-wrap -m-4">
                            {
                                WorkData.Work.map((item) => (
                                    <div key={item.id} className="p-4 xl:w-1/4 md:w-1/2 w-full">
                                        <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                                            <div className="text-sm tracking-widest title-font mb-1 font-medium">PROJECT #{item.id}</div>
                                            <div className='text-5xl text-white pb-4 mb-4 border-b border-gray-200 leading-none'>{item.name}</div>
                                            <div className='text-xs text-gray-500 mt-3'>{item.slug}</div>
                                            <Link href={`/projects/${item.name}`} rel='noopener noreferrer' className='no-cursor'>
                                                <div type="button" class="text-white bg-[#3e5382] hover:bg-[#2d447a] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ">
                                                    View Project
                                                    <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Projects;
