// ProjectCard.js
import { RxExit } from "react-icons/rx";
import { FiGithub } from "react-icons/fi";
import PropTypes from "prop-types"

const ProjectCard = ({ image, title, description, technologies, liveLink, githubLink }) => (
    <div className='bg-[#112240] p-4 lg:p-6 rounded-lg shadow-lg flex flex-col'>
        <img src={image} alt={title} className='w-full h-48 object-cover rounded mb-4 opacity-20 hover:opacity-80' />
        <div className='flex-grow'>
            <h3 className='text-xl font-semibold text-primary mb-2'>{title}</h3>
            <p className='text-sm lg:text-base text-[#8892b0] mb-4'>{description}</p>
        </div>
        <div className='mb-4'>
            <h4 className='text-lg font-semibold text-primary mb-2'>Technologies Used:</h4>
            <div className='flex flex-wrap items-center gap-2'>
                {technologies.map((TechIcon, index) => (
                    <div key={index} className='relative group border-[1px] border-solid border-fontColor font-mono py-1 px-1 rounded hover:translate-x-[-4px] hover:translate-y-[-4px] hover:duration-300 hover:shadow-[3px_3px_0px_0px_rgba(100,255,218)]'>
                        <TechIcon size={20} className='text-[#64ffda] hover:text-[#64ffda]' />
                        <span className='absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 p-1 bg-gray-800 text-white text-xs rounded hidden group-hover:block'>
                            {TechIcon.name}
                        </span>
                    </div>
                ))}
                <div className='relative group border-[1px] border-solid border-fontColor font-mono py-1 px-1 rounded hover:translate-x-[-4px] hover:translate-y-[-4px] hover:duration-300 hover:shadow-[3px_3px_0px_0px_rgba(100,255,218)]'>
                    <span className='text-xs text-white'>Daisy UI</span>
                    <span className='absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 p-1 bg-gray-800 text-white text-xs rounded hidden group-hover:block'>
                        Daisy UI
                    </span>
                </div>
                <div className='relative group border-[1px] border-solid border-fontColor font-mono py-1 px-1 rounded hover:translate-x-[-4px] hover:translate-y-[-4px] hover:duration-300 hover:shadow-[3px_3px_0px_0px_rgba(100,255,218)]'>
                    <span className='text-xs text-white'>React Form Hook</span>
                    <span className='absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 p-1 bg-gray-800 text-white text-xs rounded hidden group-hover:block'>
                        React Form Hook
                    </span>
                </div>
                <div className='relative group border-[1px] border-solid border-fontColor font-mono py-1 px-1 rounded hover:translate-x-[-4px] hover:translate-y-[-4px] hover:duration-300 hover:shadow-[3px_3px_0px_0px_rgba(100,255,218)]'>
                    <span className='text-xs text-white'>React Hot Toast</span>
                    <span className='absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 p-1 bg-gray-800 text-white text-xs rounded hidden group-hover:block'>
                        React Hot Toast
                    </span>
                </div>
            </div>
        </div>
        <div className='flex items-center justify-between text-primary text-2xl font-medium gap-4'>
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className='group relative hover:duration-300'>
                <RxExit className='cursor-pointer' />
                <span className='absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 p-1 bg-gray-800 text-white text-xs rounded hidden group-hover:block'>Live Site</span>
            </a>
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className='group relative hover:duration-300'>
                <FiGithub className='cursor-pointer' />
                <span className='absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 p-1 bg-gray-800 text-white text-xs rounded hidden group-hover:block'>GitHub</span>
            </a>
        </div>
    </div>
);

ProjectCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    technologies: PropTypes.array,
    liveLink: PropTypes.any,
    githubLink: PropTypes.any,
    image: PropTypes.any
}

export default ProjectCard;
