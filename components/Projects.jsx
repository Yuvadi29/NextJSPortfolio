import React from 'react'
import ProjectItem from './ProjectItem';
import project1 from '../public/assets/projects/project1.png';
import Motivation from '../public/assets/projects/Motivation.png';
import Netflix from '../public/assets/projects/Netflix.png';
import Hackathon from '../public/assets/projects/Hackathon.png';
import Calculator from '../public/assets/projects/calculator.png';
import Portfolio from '../public/assets/projects/portfolio.png';


const Projects = () => {
    return (
        <div id='projects' className='w-full no-cursor'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
                <h2 className='py-4'>What I have Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>

                    <ProjectItem
                        title='Youtube Clone'
                        image={project1}
                        Url='/youtubeClone'
                        techStack = 'React, Material UI, Youtube API'
                    />
                    <ProjectItem
                        title='Motivation App'
                        image={Motivation}
                        Url='/motivationApp'
                        techStack= 'React, CSS, RapidAPI'
                    />
                    <ProjectItem
                        title='Netflix Clone'
                        image={Netflix}
                        Url='/netflixClone'
                        techStack= 'React, CSS , RapidAPI, Firebase'
                    />
                    <ProjectItem
                        title='Calculator'
                        image={Calculator}
                        Url='/calculator'
                        techStack= 'HTML, CSS, JavaScript'
                    />
                    <ProjectItem
                        title='React Portfolio'
                        image={Portfolio}
                        Url='/reactPortfolio'
                        techStack= 'React, CSS'
                    />
                    <ProjectItem
                        title='Vcet Hackathon 2022'
                        image={Hackathon}
                        Url='/vcetHackathon'
                        techStack= 'React, CSS'
                    />

                </div>
            </div>
        </div>
    )
}

export default Projects;