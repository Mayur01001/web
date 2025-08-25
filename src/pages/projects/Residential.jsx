import React from 'react';
import { Link } from 'react-router-dom';
import ClassificationTabs from '../../components/projects/classificationTabs';

const projectsData = [
  {
    name: 'Dream Signature',
    location: 'Mumbai',
    image: '/images/residential/dream_signature/Picture2.jpg',
    link: '/data/residential/dream_signature'
  },
  {
    name: 'Roohi Solitaire',
    location: 'Mumbai',
    image: '/images/residential/roohi_solitaire/Picture2.jpg',
    link: '/data/residential/roohi_solitaire'
  },
  {
    name: 'Minnat Group',
    location: 'Mumbai',
    image: '/images/residential/minnat_group/Picture2.jpg',
    link: '/data/residential/minnat'
  },
  {
    name: 'Saraswati Heights',
    location: 'Mumbai',
    image: '/images/residential/saraswati_heights/Picture2.jpg',
    link: '/data/residential/saraswati_height'
  },
  {
    name: 'Monik',
    location: 'Mumbai',
    image: '/images/residential/monik/Picture2.jpg',
    link: '/data/residential/monik'
  },
  {
    name: 'Tripitak',
    location: 'Mumbai',
    image: '/images/residential/tripitak/Picture1.jpg',
    link: '/data/residential/tripitak'
  },
  
  
  {
    name: 'Nepeancy',
    location: 'Mumbai',
    image: '/images/residential/nepeancy_road/Picture2.jpg',
    link: '/data/residential/nepeancy_road'
  },
  {
    name: 'Metro Crown',
    location: 'Mumbai',
    image: '/images/residential/metro_crown/Picture1.jpg',
    link: '/data/residential/metro_crown'
  },
  {
    name: 'Hitesh Heights',
    location: 'Mumbai',
    image: '/images/residential/hitesh_heights/Picture1.jpg',
    link: '/data/residential/hitesh_heights'
  },
  {
    name: 'Firdous Apartment',
    location: 'Mumbai',
    image: '/images/residential/firdous_apartment/Picture1.jpg',
    link: '/data/residential/firdous_apartment'
  },
  {
    name: 'Metro Sarvashramik',
    location: 'Mumbai',
    image: '/images/residential/metro_sarvashramik/Picture1.jpg',
    link: '/data/residential/metro_sarvashramik'
  },
  {
    name: 'Proposed Redevelopment',
    location: 'Prabhadevi / Mumbai',
    image: '/images/residential/proposed_redevelopment_1/Picture1.jpg',
    link: '/data/residential/proposed_redevelopment_1'
  },
  
  {
    name: 'Orchid Aarambh',
    location: 'Mumbai',
    image: '/images/residential/orchid_aarambh/Picture1.jpg',
    link: '/data/residential/orchid_aarambh'
  },
  
  {
    name: 'Rakshi Group',
    location: 'Mumbai',
    image: '/images/residential/rakshi_group/Picture1.jpg',
    link: '/data/residential/rakshi_group'
  },
  {
    name: 'Ram Tekadi',
    location: 'Mumbai',
    image: '/images/residential/ram_tekadi/Picture1.jpg',
    link: '/data/residential/ram_tekadi'
  },
  {
    name: 'Bay View',
    location: 'Mumbai',
    image: '/images/residential/bay_view/Picture1.jpg',
    link: '/data/residential/bay_view'
  },
  {
    name: 'Satara Vatsala',
    location: 'Mumbai',
    image: '/images/residential/satara_vatsala/Picture2.jpg',
    link: '/data/residential/satara_vatsala'
  },
  {
    name: 'Anil Pandit',
    location: 'Mumbai',
    image: '/images/residential/anil_pandit/Picture1.jpg',
    link: '/data/residential/anil_pandit'
  },
  {
    name: 'Saraswati Paradise',
    location: 'Mumbai',
    image: '/images/residential/saraswati_paradise/Picture1.jpg',
    link: '/data/residential/saraswati_paradise'
  },
  {
    name: 'Arihant Nivara',
    location: 'Mumbai',
    image: '/images/residential/arihant_nivara/Picture1.jpg',
    link: '/data/residential/arihant_nivara'
  },{
    name: 'Dream Aspire',
    location: 'Mumbai',
    image: '/images/residential/dream_aspire/Picture2.jpg',
    link: '/data/residential/dream_aspire'
  },
  {
    name: 'Sai Swarop',
    location: 'Mumbai',
    image: '/images/residential/sai_swarop/Picture1.jpg',
    link: '/data/residential/sai_swarop'
  },
  {
    name: 'Shankeshwar Heights',
    location: 'Mumbai',
    image: '/images/residential/shankeshwar_heights/Picture2.jpg',
    link: '/data/residential/shankeshwar_heights'
  },
  {
    name: 'Saraswati Sky Terrace',
    location: 'Mumbai',
    image: '/images/residential/saraswati_sky_terrace/Picture1.jpg',
    link: '/data/residential/saraswati_sky_terrace'
  },
  {
    name: 'Neelam Group',
    location: 'Mumbai',
    image: '/images/residential/neelam_group/Picture1.jpg',
    link: '/data/residential/neelam_group'
  },
  {
    name: 'IRA Insignia',
    location: 'Mumbai',
    image: '/images/residential/ira_insignia/Picture1.jpg',
    link: '/data/residential/ira_insignia'
  },
  {
    name: 'Grace Fludic',
    location: 'Mumbai',
    image: '/images/residential/grace_fludic/Picture1.jpg',
    link: '/data/residential/grace_fludic'
  },
  {
    name: 'Saraswati Sky Terrace',
    location: 'Mumbai',
    image: '/images/residential/saraswati_sky_terrace/Picture1.jpg',
    link: '/data/residential/saraswati_sky_terrace'
  },
  
];

const Residential = () => {
  return (
    <div className="pt-[100px] px-[120px] pb-[60px] font-sans text-[#222]">
      <h1 className="text-[40px] font-bold text-center mb-[40px]">Residential</h1>

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

export default Residential;
