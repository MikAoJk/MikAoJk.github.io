import React from "react";

interface InfoAboutMeCardProps {
    name: string;
    location: string;
    tagline: string;
    email: string;
    details: React.ReactNode;
}

export const InfoAboutMeCard: React.FC<InfoAboutMeCardProps> = ({
    name,
    location,
    tagline,
    email,
    details,
}) => (
    <div className="relative border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 hover:bg-gray-700 transition-colors duration-200">
        <h1 className="font-semibold text-2xl mb-1">{name}</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">{location}</p>
        <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{tagline}</p>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
            <a href={`mailto:${email}`} className="hover:underline">{email}</a>
        </p>
        <div className="text-gray-700 dark:text-gray-200">{details}</div>
    </div>
);
