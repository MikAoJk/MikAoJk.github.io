import React from 'react';

interface ExperienceCardProps {
    title: string;
    company: string;
    fromDate: string;
    toDate: string;
    companyLink: string;
    desc: string;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({title, company, fromDate, toDate, companyLink, desc}) => {
    return (
        <div>
            <a href={companyLink}>
                <div
                    className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 hover:bg-gray-700">
                    <h1 className="font-semibold text-xl">{title}</h1>
                    <p className="text-gray-600 dark:text-gray-400 my-2">Period: {fromDate} - {toDate}</p>
                    {company}
                    <p className="text-gray-600 dark:text-gray-400 my-2">{desc}</p>
                </div>
            </a>
        </div>

    );
};
