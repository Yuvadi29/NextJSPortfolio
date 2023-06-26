import React from 'react';
import WorkData from './Projects.json';
import Link from 'next/link';
import Image from 'next/image';

const Projects = () => {
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
                            <section className="dark:bg-gray-800 dark:text-gray-100 rounded-lg">
                                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                        {WorkData.Work.map((item) => (
                                            <div key={item.id} className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 rounded-xl">
                                                <Link href={`/projects/${item.name}`} rel="noopener noreferrer" className="no-cursor">
                                                    <img role="presentation" className="w-full rounded h-auto dark:bg-gray-500" src={item.image} />
                                                    <div className="p-6 space-y-2">
                                                        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{item.name}</h3>
                                                        <span className="text-xs dark:text-gray-400">Project #{item.id}</span>
                                                        <p>{item.slug}</p>
                                                    </div>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>


                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Projects;
