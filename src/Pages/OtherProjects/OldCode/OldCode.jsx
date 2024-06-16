import ProjectCard from './ProjectCard'
import Button from '../../Components/Button'


const OtherProjects = () => {
  return (
    <div className='w-full bg-background flex flex-col items-center justify-center pt-[100px] pb-[100px]'>
        <div className='flex flex-col items-center justify-start w-[80%]'>
            <div className='w-full flex flex-col justify-start items-center py-[20px]' >
                <div className='flex flex-col items-center justify-start gap-[10px] mb-[50px]'>
                    <div className='font-sans text-[28px] font-bold text-primary'>Other Noteworthy Projects</div>
                    <div className='font-mono text-[14px] text-primary'>view the archive</div>
                </div>
                <div className='flex flex-wrap gap-[20px] mb-[100px]'>
                    <ProjectCard github='hh' title='Integrating Algolia Search with WordPress Multisite' text='Building a custom multisite compatible WordPress plugin to build global search with Algolia' />
                    <ProjectCard title='Time to Have More Fun' text='A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS' />
                    <ProjectCard title='Life is like a Yam' text='A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS' github='yes'/>
                    <ProjectCard github='hh' title='Integrating Algolia Search with WordPress Multisite' text='Building a custom multisite compatible WordPress plugin to build global search with Algolia' />
                    <ProjectCard title='Time to Have More Fun' text='A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS' />
                    <ProjectCard title='Life is like a Yam' text='A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS' github='yes'/>
                </div>
                <div className='flex items-center justify-center text-primary'>
                    <Button title='Show More' />
                </div>
            </div>
        </div>
    </div>    
  )
}

export default OtherProjects