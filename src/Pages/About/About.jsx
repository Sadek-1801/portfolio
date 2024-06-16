import Title from '../../Components/Title'
import Me from '../../assets/images/Black Simple Bold Professional Twitter Profile Picture.png'

const About = () => {
  return (
    <div id='about' className='w-full bg-background flex flex-col items-center justify-center pb-[100px]'>
        <div className='flex flex-col items-center justify-start w-[70%]'>
          <div className='w-full flex justify-start items-center py-[20px]' >
            <Title no='01' name='About Me' />
          </div> 
          <div className='flex items-start justify-center gap-[50px]'> 
            <div className='w-[60%] flex flex-col items-start justify-start gap-[10px] text-[16px] text-[#8892b0] font-sans font-normal'>
              <div>Hello! My name is Ashrafujjaman and I enjoy programming and coding. My interest in programming started back in October-2023 when I have enrolled CS50x course on edx, turns out that I reaaly enjoy coding and solving problems!</div>

              <div>Fast-forward to today, and I’ve started learning javaScript and set my goal to be a full stack developer on JS and become a software developer. Recently, I have honed my skills in JavaScript, React JS, MongoDB, Express.js and Node.js.</div>

              <div> I successfully designed and implemented several web applications, one of which is FitFinesse, a comprehensive fitness class-booking platform. This project required me to develop user-friendly interfaces, implement secure authentication using JWT, and manage data effectively with Firebase integration.</div>

              {/* <div>Here are a few technologies I’ve been working with recently:</div>
              
              <div className='flex justify-start items-start gap-[50px] ml-[20px]'>
                <ul className='list-disc text-[16px] text-[#8892b0] font-sans flex flex-col gap-[10px]'>
                  <li>JavaScript (ES6+)</li>
                  <li>React</li>
                  <li>Node.js</li>
                </ul>
                <ul className='list-disc text-[16px] text-[#8892b0] font-sans flex flex-col gap-[10px]'>
                  <li>TypeScript</li>
                  <li>Eleventy</li>
                  <li>WordPress</li>
                </ul>
              </div> */}
            </div>
            <div className='w-[50%] relative'>
              <div className='w-[330px] h-[330px] border-2 border-white rounded-full hover:translate-x-[20px] hover:translate-y-[20px] hover:duration-300 absolute'></div>
              <img className='top-4 left-4 w-[300px] rounded-full h-[300px] bg-white hover:translate-x-[-4px] hover:translate-y-[-4px] hover:duration-300  absolute object-cover overflow-hidden' src={Me} alt="" />
              <div className='w-[320px] h-[320px] rounded-full bg-[#0A192F]  absolute opacity-50 hover:opacity-5'></div>
              
            </div>
          </div>   
        </div>
    </div>
        
  )
}

export default About