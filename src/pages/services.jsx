import React, { useState } from 'react';
import Footer from '../components/footer';

const servicesData = [
  { 
    title: 'Architectural Design',
    content: `Ashar Titan’s design language is a humble blend of contemporary
              architecture rooted in the simplicity of raw exposed aesthetics.
              The layout provides expansive master bedrooms with lavish
              washrooms throughout the house. The high-end interiors focus on
              curating spaces that deliver quality, details, and comfort. The
              core of the building’s design concept revolves around passive
              cooling and natural ventilation. Extensively designed terrace
              amenities are proposed in this project.Ashar Titan’s design language is a humble blend of contemporary
              architecture rooted in the simplicity of raw exposed aesthetics.
              The layout provides expansive master bedrooms with lavish
              washrooms throughout the house. The high-end interiors focus on
              curating spaces that deliver quality, details, and comfort. The
              core of the building’s design concept revolves around passive
              cooling and natural ventilation. Extensively designed terrace
              amenities are proposed in this project`,
  },
  {
    title: 'Urban Design',
    content: `Ashar Titan’s design language is a humble blend of contemporary
              architecture rooted in the simplicity of raw exposed aesthetics.
              The layout provides expansive master bedrooms with lavish
              washrooms throughout the house. The high-end interiors focus on
              curating spaces that deliver quality, details, and comfort. The
              core of the building’s design concept revolves around passive
              cooling and natural ventilation. Extensively designed terrace
              amenities are proposed in this project Ashar Titan’s design language is a humble blend of contemporary
              architecture rooted in the simplicity of raw exposed aesthetics.
              The layout provides expansive master bedrooms with lavish
              washrooms throughout the house. The high-end interiors focus on
              curating spaces that deliver quality, details, and comfort. The
              core of the building’s design concept revolves around passive
              cooling and natural ventilation. Extensively designed terrace
              amenities are proposed in this project.`,
  },
  {
    title: 'Interior Design',
    content: `Ashar Titan’s design language is a humble blend of contemporary
              architecture rooted in the simplicity of raw exposed aesthetics.
              The layout provides expansive master bedrooms with lavish
              washrooms throughout the house. The high-end interiors focus on
              curating spaces that deliver quality, details, and comfort. The
              core of the building’s design concept revolves around passive
              cooling and natural ventilation. Extensively designed terrace
              amenities are proposed in this project. Ashar Titan’s design language is a humble blend of contemporary
              architecture rooted in the simplicity of raw exposed aesthetics.
              The layout provides expansive master bedrooms with lavish
              washrooms throughout the house. The high-end interiors focus on
              curating spaces that deliver quality, details, and comfort. The
              core of the building’s design concept revolves around passive
              cooling and natural ventilation. Extensively designed terrace
              amenities are proposed in this project`,
  },
  {
    title: 'Liasoning',
    content: `Ashar Titan’s design language is a humble blend of contemporary
              architecture rooted in the simplicity of raw exposed aesthetics.
              The layout provides expansive master bedrooms with lavish
              washrooms throughout the house. The high-end interiors focus on
              curating spaces that deliver quality, details, and comfort. The
              core of the building’s design concept revolves around passive
              cooling and natural ventilation. Extensively designed terrace
              amenities are proposed in this project.Ashar Titan’s design language is a humble blend of contemporary
              architecture rooted in the simplicity of raw exposed aesthetics.
              The layout provides expansive master bedrooms with lavish
              washrooms throughout the house. The high-end interiors focus on
              curating spaces that deliver quality, details, and comfort. The
              core of the building’s design concept revolves around passive
              cooling and natural ventilation. Extensively designed terrace
              amenities are proposed in this project`,
  },
  {
    title: 'Project Management',
    content: `Ashar Titan’s design language is a humble blend of contemporary
              architecture rooted in the simplicity of raw exposed aesthetics.
              The layout provides expansive master bedrooms with lavish
              washrooms throughout the house. The high-end interiors focus on
              curating spaces that deliver quality, details, and comfort. The
              core of the building’s design concept revolves around passive
              cooling and natural ventilation. Extensively designed terrace
              amenities are proposed in this project.Ashar Titan’s design language is a humble blend of contemporary
              architecture rooted in the simplicity of raw exposed aesthetics.
              The layout provides expansive master bedrooms with lavish
              washrooms throughout the house. The high-end interiors focus on
              curating spaces that deliver quality, details, and comfort. The
              core of the building’s design concept revolves around passive
              cooling and natural ventilation. Extensively designed terrace
              amenities are proposed in this project`,
  },
  {
    title: 'Feasibility Studies',
    content: `Ashar Titan’s design language is a humble blend of contemporary
              architecture rooted in the simplicity of raw exposed aesthetics.
              The layout provides expansive master bedrooms with lavish
              washrooms throughout the house. The high-end interiors focus on
              curating spaces that deliver quality, details, and comfort. The
              core of the building’s design concept revolves around passive
              cooling and natural ventilation. Extensively designed terrace
              amenities are proposed in this project.Ashar Titan’s design language is a humble blend of contemporary
              architecture rooted in the simplicity of raw exposed aesthetics.
              The layout provides expansive master bedrooms with lavish
              washrooms throughout the house. The high-end interiors focus on
              curating spaces that deliver quality, details, and comfort. The
              core of the building’s design concept revolves around passive
              cooling and natural ventilation. Extensively designed terrace
              amenities are proposed in this project`,
  },
];

const Services = () => {
  
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
  <div>
    <div className="px-6 md:px-20 py-10 bg-white">
      <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Services</h2>

      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/residential/saraswati_sky_terrace/Picture1.jpg"
            alt="Service Illustration"
            className="w-full rounded-xl shadow-md"
          />
        </div>

        {/* Right Accordion */}
        <div className="w-full md:w-1/2 space-y-4">
          {servicesData.map((service, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-medium text-gray-800">
                  {service.title}
                </h3>
                <span className="text-2xl font-bold text-gray-600">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </div>
              {activeIndex === index && (
                <p className="text-gray-700 mt-4 leading-relaxed">
                  {service.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
  </div>  
    
  );
};

export default Services;
