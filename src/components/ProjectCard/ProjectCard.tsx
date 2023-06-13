import React from 'react';

interface ProjectCardProps {
    title: string;
    gitHubLink: string;
    desc: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({title, gitHubLink, desc}) => {
    return (
        <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4">
            <a href={gitHubLink} className="font-medium hover:underline">
                {title}
            </a>
            <p className="text-gray-600 dark:text-gray-400 my-2">{desc}</p>
        </div>
    );
};