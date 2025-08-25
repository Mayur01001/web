import React from "react";

const ArihantNivara = () => {
  return (
    <div className="font-sans m-0 p-0">
      {/* Background Image Section */}
      <div
        className="w-full h-[100vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/residential/arihant_nivara/Picture1.jpg')",
        }}
      ></div>

      {/* Content Section */}
      <div className="flex flex-col px-6 md:px-12 py-12 max-w-[1200px] mx-auto bg-white shadow-lg rounded-xl mt-[-50px] relative z-10">
        {/* Image + Content Row */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Image */}
          <div className="flex-1 min-w-[300px]">
            <img
              src="/images/residential/arihant_nivara/Picture1.jpg"
              alt="Ashar Titan Interior"
              className="w-full h-[600px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right Content */}
          <div className="flex-1 flex flex-col justify-start min-w-[300px]">
            {/* Description Headers */}
            <div className="flex flex-col items-center mb-6">
              <p className="border-b-2 border-black pb-1 text-[20px] font-semibold">
                Monik
              </p>
              <p className="mt-2 text-[16px] text-gray-700 font-medium">
                Construction Area
              </p>
            </div>

            {/* Paragraph */}
            <p className="text-[16px] leading-[1.8] text-gray-800 text-justify">
              Ashar Titan’s design language is a humble blend of contemporary
              architecture rooted in the simplicity of raw exposed aesthetics.
              The layout provides expansive master bedrooms with lavish
              washrooms throughout the house. The high-end interiors focus on
              curating spaces that deliver quality, details, and comfort. The
              core of the building’s design concept revolves around passive
              cooling and natural ventilation. Extensively designed terrace
              amenities are proposed in this project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArihantNivara;
