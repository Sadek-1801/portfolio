import Title from '../../Components/Title';
import { RxExit } from "react-icons/rx";
import { FiGithub } from "react-icons/fi";
import ImageSlider from '../../Components/ImageSlider/ImageSlider';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiAxios, SiExpress, SiFirebase, SiHeadlessui, SiMongodb, SiReactquery, SiReactrouter, SiTailwindcss } from 'react-icons/si';

const Built = () => {

  return (
    <div id='project' className='w-full bg-background flex flex-col items-center justify-center pt-20 pb-20'>
      <div className='w-11/12 lg:w-4/5 flex flex-col items-center'>
        <div className='w-full flex justify-start items-center py-5 mb-5'>
          <Title no='02' name='Some Things I’ve Built' />
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-24'>
          <div className='w-full h-64 md:h-96 overflow-hidden opacity-20 hover:opacity-80'>
            <ImageSlider />
          </div>

          <div className='flex flex-col justify-start space-y-4'>
            <div className='flex items-center justify-between'>
              <div className='font-sans text-xl lg:text-2xl font-medium text-primary'>FitFinese</div>
              <div className='flex items-center justify-end lg:justify-start text-primary text-2xl font-medium gap-4 '>
                <a href="https://fitfinesse.netlify.app/" target="_blank" rel="noopener noreferrer" className='group relative hover:duration-300'>
                <RxExit className='cursor-pointer' />
                <span className='absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 p-1 bg-gray-800 text-white text-xs rounded hidden group-hover:block'>Live Site</span></a>
                
                <a href="https://github.com/Sadek-1801" target="_blank" rel="noopener noreferrer" className='group relative hover:duration-300'>
                <FiGithub className='cursor-pointer' />
                <span className='absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 p-1 bg-gray-800 text-white text-xs rounded hidden group-hover:block'>Github</span></a>
              </div>
            </div>
            <div className='w-full'>
              <div className='flex flex-wrap items-center justify-center gap-4 text-center'>
                <div className='relative group border-[1px] border-solid border-fontColor font-mono py-1 px-1 rounded hover:translate-x-[-4px] hover:translate-y-[-4px] hover:duration-300 hover:shadow-[3px_3px_0px_0px_rgba(100,255,218)]'>
                  <FaReact size={20} className='text-[#61DAFB]' />
                  <span className='absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 p-1 bg-gray-800 text-white text-xs rounded hidden group-hover:block'>React JS</span>
                </div>
                <div className='relative group border-[1px] border-solid border-fontColor font-mono py-1 px-1 rounded hover:translate-x-[-4px] hover:translate-y-[-4px] hover:duration-300 hover:shadow-[3px_3px_0px_0px_rgba(100,255,218)]'>
                  <SiReactrouter size={20} className='text-[#ca4245]' />
                  <span className='absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 p-1 bg-gray-800 text-white text-xs rounded hidden group-hover:block'>React Router Dom</span>
                </div>
                <div className='relative group border-[1px] border-solid border-fontColor font-mono py-1 px-1 rounded hover:translate-x-[-4px] hover:translate-y-[-4px] hover:duration-300 hover:shadow-[3px_3px_0px_0px_rgba(100,255,218)]'>
                  <SiFirebase size={20} className='text-[#FFCA28]' />
                  <span className='absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 p-1 bg-gray-800 text-white text-xs rounded hidden group-hover:block'>Firebase</span>
                </div>
                <div className='relative group border-[1px] border-solid border-fontColor font-mono py-1 px-1 rounded hover:translate-x-[-4px] hover:translate-y-[-4px] hover:duration-300 hover:shadow-[3px_3px_0px_0px_rgba(100,255,218)]'>
                  <SiTailwindcss size={20} className='text-[#38B2AC]' />
                  <span className='absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 p-1 bg-gray-800 text-white text-xs rounded hidden group-hover:block'>Tailwind CSS</span>
                </div>
                <div className='relative group border-[1px] border-solid border-fontColor font-mono py-1 px-1 rounded hover:translate-x-[-4px] hover:translate-y-[-4px] hover:duration-300 hover:shadow-[3px_3px_0px_0px_rgba(100,255,218)]'>
                  <SiHeadlessui size={20} className='text-[#4B5563]' />
                  <span className='absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 p-1 bg-gray-800 text-white text-xs rounded hidden group-hover:block'>Headless UI</span>
                </div>
                <div className='relative group border-[1px] border-solid border-fontColor font-mono py-1 px-1 rounded hover:translate-x-[-4px] hover:translate-y-[-4px] hover:duration-300 hover:shadow-[3px_3px_0px_0px_rgba(100,255,218)]'>
                  <SiReactquery size={20} className='text-[#FF4154]' />
                  <span className='absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 p-1 bg-gray-800 text-white text-xs rounded hidden group-hover:block'>Tanstack Query</span>
                </div>
                <div className='relative group border-[1px] border-solid border-fontColor font-mono py-1 px-1 rounded hover:translate-x-[-4px] hover:translate-y-[-4px] hover:duration-300 hover:shadow-[3px_3px_0px_0px_rgba(100,255,218)]'>
                  <SiAxios size={20} className='text-[#5A29E4]' />
                  <span className='absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 p-1 bg-gray-800 text-white text-xs rounded hidden group-hover:block'>Axios</span>
                </div>
                <div className='relative group border-[1px] border-solid border-fontColor font-mono py-1 px-1 rounded hover:translate-x-[-4px] hover:translate-y-[-4px] hover:duration-300 hover:shadow-[3px_3px_0px_0px_rgba(100,255,218)]'>
                  <FaNodeJs size={20} className='text-[#339933]' />
                  <span className='absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 p-1 bg-gray-800 text-white text-xs rounded hidden group-hover:block'>Node.js</span>
                </div>
                <div className='relative group border-[1px] border-solid border-fontColor font-mono py-1 px-1 rounded hover:translate-x-[-4px] hover:translate-y-[-4px] hover:duration-300 hover:shadow-[3px_3px_0px_0px_rgba(100,255,218)]'>
                  <SiExpress size={20} className='text-[#787878]' />
                  <span className='absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 p-1 bg-gray-800 text-white text-xs rounded hidden group-hover:block'>Express.js</span>
                </div>
                <div className='relative group border-[1px] border-solid border-fontColor font-mono py-1 px-1 rounded hover:translate-x-[-4px] hover:translate-y-[-4px] hover:duration-300 hover:shadow-[3px_3px_0px_0px_rgba(100,255,218)]'>
                  <SiMongodb size={20} className='text-[#47A248]' />
                  <span className='absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 p-1 bg-gray-800 text-white text-xs rounded hidden group-hover:block'>MongoDB</span>
                </div>
              </div>
            </div>
            <div className='text-sm lg:text-base text-[#8892b0] font-sans font-medium bg-[#112240] p-4 lg:p-6 rounded'>
              <h3 className='text-xl font-bold mb-4 text-primary'>Features</h3>
              <ul className='list-disc list-outside ml-3'>
                <li>FitFinesse is a comprehensive fitness class-booking platform designed to help users find and book fitness classes that match their preferences and schedules.
                </li>
                <li>Implemented dashboard for admin, trainer and member, features like class search, pagination, class booking, trainer application, admin role to manage trainers, users and classes.</li>
                <li>Integrated firebase, private routs, and JWT authentication for better security.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Built;
