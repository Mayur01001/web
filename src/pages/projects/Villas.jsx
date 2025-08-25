import React from 'react';
import { Link } from 'react-router-dom';
import ClassificationTabs from '../../components/projects/classificationTabs';

const projectsData = [
  {
    name: 'House for Deepak Bhai',
    location: 'Nagpur',
    image: '/images/villas/house_for_deepak_bhai/Picture1.jpg',
    link: '/data/villas/house_for_deepak_bhai'
  },
  {
    name: 'Ladwa House',
    location: 'Tanzania / South Africa',
    image: '/images/villas/ladwa_house/Picture1.jpg',
    link: '/data/villas/ladwa_house'
  },
  {
    name: 'Washivali Bunglow',
    location: 'Mumbai',
    image: '/images/villas/washivali/Picture1.jpg',
    link: '/data/villas/washivali'
  },
  {
    name: 'House for Mr.Patel',
    location: 'Bhuj / Gujarat',
    image: '/images/villas/house_for_mr.patel/Picture2.jpg',
    link: '/data/villas/house_for_mr.patel'
  },
    {
    name: 'Tanzania Bunglow',
    location: 'Tanzania / South Africa',
    image: '/images/villas/tanzania_bunglow/Picture2.jpg',
    link: '/data/villas/tanzania_bunglow'
  },
];

const Villas = () => {
  return (
    <div className="pt-[120px] px-[120px] pb-[60px] font-sans text-[#222]">
      <h1 className="text-[40px] font-bold text-center mb-[40px]">Villas</h1>

      {/* Tabs */}
      <ClassificationTabs />

      {/* Grid */}
      <div className="grid gap-[30px] grid-cols-[repeat(auto-fit,minmax(280px,1fr))] justify-center">
        {projectsData.map((project, index) => (
          <Link key={index} to={project.link} className="no-underline">
            <div className="relative overflow-hidden rounded-[10px] cursor-pointer group">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-[350px] object-cover block transition-transform duration-400 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 text-white flex flex-col justify-center items-center opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                <div className="text-[20px] font-semibold text-center">
                  {project.name}
                </div>
                <div className="text-[14px] mt-1">{project.location}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Villas;
