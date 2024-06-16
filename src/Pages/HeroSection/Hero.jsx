import { Fade } from 'react-awesome-reveal'
import Button from '../../Components/Button'
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  const textArr = ["Frontend Developer", "React & JavaScript", "Web Developer "]
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % textArr.length);
    }, 3000); // Change the interval as per your requirement
    return () => clearInterval(interval);
  }, [textArr.length]);

  return (
    <div className='w-full bg-background flex items-center justify-center'>
      <div className='w-[80%] flex flex-col justify-center items-start text-primary py-[100px] ' >
        <div className='font-medium text-[18px] font-mono mb-[0px]'>Hi, my name is</div>
        <div className='flex flex-col justify-center items-start text-4xl md:text-7xl mb-[30px] font-bold font-sans'>

          <div className=' text-[#ccd6f6] mb-0 uppercase'>
            <Fade cascade delay={500} damping={0.1}>m. ashrafujjaman.</Fade>
          </div>

          <Fade key={index} direction="left" delay={1000} cascade triggerOnce>
            <div className='text-3xl md:text-5xl text-[#8892b0]'>
              {textArr[index]}
            </div>
          </Fade>

        </div>
        <div className='text-[18px] text-[#8892b0] w-full md:w-[600px] mb-[50px] font-sans font-normal'>I&apos;m an aspiring MERN Stack Developer passionate about crafting innovative and efficient web solutions. Dedicated to problem-solving and critical thinking that drives me to deliver clean code, responsive, and user-friendly software and applications. As I continue to learn and grow in this field, I aim to add value through creativity, attention to detail, and a commitment to continuous improvement. </div>
        <div className="flex gap-4">
        <a href="https://drive.google.com/file/d/1_7shCLHhZpRkAcW0U5e8_LGJWKQz8xQc/view?usp=drive_link" target='_blank'>
          <Button title='Resume' /></a>
          <a href="https://github.com/your-github-username" target='_blank' rel='noopener noreferrer' className='flex items-center border-[1px] border-solid border-fontColor font-mono py-2 px-2 rounded hover:translate-x-[-4px] hover:translate-y-[-4px] hover:duration-300 hover:shadow-[3px_3px_0px_0px_rgba(100,255,218)]'><FaGithub className='h-5 mr-1'></FaGithub> Git
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin-username" target='_blank' rel='noopener noreferrer' className='flex items-center border-[1px] border-solid border-fontColor font-mono py-2 px-2 rounded hover:translate-x-[-4px] hover:translate-y-[-4px] hover:duration-300 hover:shadow-[3px_3px_0px_0px_rgba(100,255,218)]'><FaLinkedin className='h-5 mr-1'></FaLinkedin> LinkedIn
          
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero