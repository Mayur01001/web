import React from 'react';
import { Link } from 'react-router-dom';
import ClassificationTabs from '../../components/projects/classificationTabs';

const projectsData = [
  {
    name: 'Mazgaon High Court',
    location: 'Mumbai',
    image: '/images/institutional/mazgaon_high_court/Picture1.jpg',
    link: '/data/institutional/mazgaon_high_court'
  },
  {
    name: 'Urban Rise',
    location: 'Pune',
    image: '/public/images/saraswati_heights/Picture13.jpg',
    link: '/projects/urban-rise'
  },
  {
    name: 'Skyview Towers',
    location: 'Nagpur',
    image: '/public/images/saraswati_heights/Picture13.jpg',
    link: '/projects/skyview-towers'
  },
  {
    name: 'Ocean Curve',
    location: 'Goa',
    image: '/public/images/saraswati_heights/Picture13.jpg',
    link: '/projects/ocean-curve'
  },
  {
    name: 'Elite Corporate',
    location: 'Hyderabad',
    image: '/public/images/saraswati_heights/Picture13.jpg',
    link: '/projects/elite-corp'
  },
  {
    name: 'Nova Heights',
    location: 'Delhi',
    image: '/public/images/saraswati_heights/Picture13.jpg',
    link: '/projects/nova-heights'
  }
];

const Institutional = () => {
  return (
    <div className="pt-[120px] px-[120px] pb-[60px] font-sans text-[#222]">
      <h1 className="text-[40px] font-bold text-center mb-[40px]">Institutional</h1>

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

export default Institutional;
