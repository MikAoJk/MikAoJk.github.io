import React from 'react';

interface ProjectCardProps {
    title: string;
    gitHubLink: string;
    desc: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({title, gitHubLink, desc}) => {
    return (
        <div>
            <a href={gitHubLink}>
                <div className="relative project-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 hover:bg-gray-700">
                    {title}
                    <p className="text-gray-600 dark:text-gray-400 my-2">{desc}</p>
                </div>
            </a>
        </div>
    );
};