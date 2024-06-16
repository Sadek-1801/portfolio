import { GoFileDirectory } from "react-icons/go";
import { RxExit } from "react-icons/rx";
import { FiGithub } from "react-icons/fi";

const ProjectCard = ({title, text, github}) => {
  return (
    <div className='flex flex-col py-[30px] px-[15px] items-between justify-start w-[345px] h-[300px] bg-[#112240] rounded hover:translate-y-[-10px] hover:duration-300 cursor-pointer'>
        <div className='flex items-center justify-between mb-[20px] text-primary'>
            <GoFileDirectory className='w-[45px] h-[45px]' />
            <div className='flex items-center justify-end gap-[20px]'>
                {github && <div className=''><FiGithub className='w-[20px] h-[20px]' /></div>}
                <RxExit className='w-[20px] h-[20px]' />
            </div>
        </div>
        <div className='flex flex-col gap-[10px] items-start justify-center mb-5 flex-1'>
            <div className='font-sans text-[20px] font-medium text-primary'>{title}</div>
            <div className='font-sans text-[16px] font-normal text-[#8892b0]'>{text}</div>
        </div>
        <div className='flex items-center justify-start gap-[20px] text-[#64ffda] text-[14px]'>
            <div>Next js</div>
            <div>Vue Js</div>
        </div>
    </div>
  )
}

export default ProjectCard