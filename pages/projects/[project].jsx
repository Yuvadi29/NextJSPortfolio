import React from 'react';
import { useRouter } from 'next/router';
import WorkData from '../../components/Projects.json';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';
import {IoLogoGithub} from 'react-icons/io';

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
        <div className='no-cursor '>
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    <div class="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
                        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 class="text-sm title-font text-gray-500 tracking-widest">PROJECT NAME</h2>
                            <h1 class="text-white text-3xl title-font font-medium mb-1">{selectedProject.name}</h1>
                            <div class="flex mb-4">
                                {/* <span class="flex items-center">
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <span class="text-gray-600 ml-3">4 Reviews</span>
                                </span> */}
                                <span class="flex pl-3 py-2 space-x-2 ">
                                    <a class="text-gray-500 no-cursor" href={selectedProject.link} target='_blank' rel="noopener noreferrer">
                                        <IoLogoGithub className='text-white' size={35}/>
                                    </a>
                                    <a class="text-gray-500 no-cursor" href={selectedProject.live} target='_blank' rel="noopener noreferrer">
                                        <BsFillArrowUpRightCircleFill className='text-white' size={35} />
                                    </a>
                                </span>
                            </div>
                            <p class="leading-relaxed">
                                Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.
                            </p>
                            {/* <div class="flex mt-6">
                                <div class="flex text-white bg-yellow-300 border-0 py-2 px-6 focus:outline-none rounded">View</div>
                                <div class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Project;

// <div className='no-cursor'>
        //     <h2>{selectedProject.name}</h2>
        //     <p>{selectedProject.description}</p>
        //     <a href={link} target="_blank" rel="noopener noreferrer" className='no-cursor'>
        //         View on GitHub
        //     </a>
        // </div>