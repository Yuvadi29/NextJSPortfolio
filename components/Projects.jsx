import React, { useState } from 'react'
import WorkData from './Projects.json';
import Link from 'next/link';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div id='projects' className='w-full no-cursor'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
                <h2 className='py-4'>What I have Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>

                    {WorkData.Work.map((item) => (
                        <div key={item.id} onClick={() => setSelectedProject(item)}>
                            <div>{item.name}</div>
                            <div>{item.slug}</div>
                            <Link href={`/projects/${item.name}`} rel='noopener noreferrer'>
                                View on Github
                            </Link>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Projects;