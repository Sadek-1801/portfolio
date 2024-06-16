// OtherProjects.js
import ProjectCard from './ProjectCard';
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiFirebase, SiMongodb, SiReactrouter, SiTailwindcss } from "react-icons/si";
import Title from '../../Components/Title';
import flyWord from "../../assets/images/flyworld-1.png";
import nexPath from "../../assets/images/nexpath-1.png"

const OtherProjects = () => {
  const projects = [
    {
      title: 'NexPath',
      image: nexPath,
      description: 'In NextPath, I developed a full-stack website using MongoDB and React, focusing on functional correctness and job searching functionalities. The site categorizes jobs into On-site, Remote, Hybrid, and Part Time roles, emphasizing user-friendly navigation and comprehensive job listings.',
      technologies: [FaReact, SiFirebase, SiTailwindcss, SiReactrouter],
      liveLink: 'https://nexpath.netlify.app/',
      githubLink: 'https://github.com/Sadek-1801/nexpath-client',
    },
    {
      title: 'FlyWorld',
      image: flyWord,
      description: 'In Flyworld, I developed a full-stack website using MongoDB and React, ensuring functional correctness throughout. The site showcases tourist spots across six South East Asian countries: Bangladesh, Thailand, Indonesia, Malaysia, Vietnam, and Cambodia, offering comprehensive travel information and insights.',
      technologies: [FaNodeJs, SiExpress, SiMongodb],
      liveLink: 'https://web-tourism-client.netlify.app/',
      githubLink: 'https://github.com/Sadek-1801/Fly-world-client',
    },
  ];

  return (
    <div className='w-full bg-background flex flex-col items-center justify-center pb-[100px]'>
      <div className='w-11/12 lg:w-4/5 mx-auto'>
        <div className='w-full flex justify-start items-center py-5 mb-5'>
          <Title no='03' name='Other Projects' />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherProjects;
