import Title from '../../Components/Title';
import Me from '../../assets/images/Black Simple Bold Professional Twitter Profile Picture.png';

const About = () => {
  return (
    <div id='about' className='w-full bg-background flex flex-col items-center justify-center pb-24'>
      <div className='flex flex-col items-center justify-start w-11/12 lg:w-4/5'>
        <div className='w-full flex justify-start items-center py-5'>
          <Title no='01' name='About Me' />
        </div>
        <div className='flex flex-col-reverse lg:flex-row items-start justify-center gap-12 lg:gap-20'>
          <div className='w-full lg:w-3/5 flex flex-col items-start justify-start gap-4 text-base text-[#8892b0] font-sans font-normal'>
            <div>Hello! My name is Ashrafujjaman and I enjoy programming and coding. My interest in programming started back in October 2023 when I enrolled in the CS50x course on edX. It turns out that I really enjoy coding and solving problems!</div>
            <div>Fast-forward to today, and I’ve started learning JavaScript and set my goal to be a full stack developer on JS and become a software developer. Recently, I have honed my skills in JavaScript, React JS, MongoDB, Express.js, and Node.js.</div>
            <div>I successfully designed and implemented several web applications, one of which is FitFinesse, a comprehensive fitness class-booking platform. This project required me to develop user-friendly interfaces, implement secure authentication using JWT, and manage data effectively with Firebase integration.</div>
          </div>
          <div className='w-full lg:w-2/5 flex justify-center lg:justify-end'>
            <div className='relative'>
              <div className='relative w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden'>
                <img className='w-full h-full object-cover' src={Me} alt='Ashrafujjaman' />
                <div className='absolute inset-0 bg-[#0A192F] opacity-50 hover:opacity-20 transition-opacity duration-300 rounded-full'></div>
                {/* <div className='absolute inset-0 border-2 border-white rounded-full transition-transform duration-300 hover:translate-x-5 hover:translate-y-5'></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
