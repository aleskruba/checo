import React from "react";

interface SectionCardProps {
  title: string;
  description: string;
}

const SectionTopComponent: React.FC<SectionCardProps> = ({ title, description }) => {
  return (
    <section className="shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white">
      <h2 className="text-xl md:text-2xl font-semibold text-blue-600 mb-4">
        {title}
      </h2>
      <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6">
        {description}
      </p>
    </section>
  );
};

export default SectionTopComponent;
