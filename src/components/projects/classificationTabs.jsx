import React from 'react';
import { Link, useLocation } from 'react-router-dom';


const categories = [
  { name: 'All Projects', path: '/projects' },
  { name: 'Residential', path: '/projects/residential' },
  { name: 'Commercial', path: '/projects/commercial' },
  { name: 'Institutional', path: '/projects/institutional' },
  { name: 'Recreational', path: '/projects/recreational' },
  { name: 'Industrial', path: '/projects/industrial'},
  { name: 'Villas', path: '/projects/villas' },
  { name: 'Interior Design', path: '/projects/interiordesign' }
];

const ClassificationTabs = () => {
  const location = useLocation();

  return (
    <div className="flex justify-center gap-[30px] mb-[50px] flex-wrap">
      {categories.map((cat, i) => (
        <Link
          key={i}
          to={cat.path}
          className={`text-[18px] text-[#555] cursor-pointer no-underline pb-[6px] ${
            location.pathname === cat.path
              ? 'font-bold text-black border-b-2 border-black'
              : ''
          }`}
        >
          {cat.name}
        </Link>
      ))}
    </div>
  );
};

export default ClassificationTabs;
