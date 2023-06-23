import React from 'react';
import { useRouter } from 'next/router';
import WorkData from '../../components/Projects.json';

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
            <h2>{selectedProject.name}</h2>
            <p>{selectedProject.description}</p>
            {/* <a href={link} target="_blank" rel="noopener noreferrer">
                View on GitHub
            </a> */}
        </div>
    );
};

export default Project;
