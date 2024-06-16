/* eslint-disable react/prop-types */
import Slider from 'react-slick';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGit, FaGithub, FaLinux, FaFigma, FaTools } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiFirebase, SiVercel, SiVisualstudiocode, SiApollographql, SiJsonwebtokens } from 'react-icons/si';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Skills.css'; // Import the CSS file for additional styling

const skills = [
  { name: "JavaScript", icon: <FaJsSquare size={40} /> },
  { name: "ES6", icon: <FaJsSquare size={40} /> },
  { name: "React JS", icon: <FaReact size={40} /> },
  { name: "React Router", icon: <FaReact size={40} /> },
  { name: "HTML 5", icon: <FaHtml5 size={40} /> },
  { name: "CSS", icon: <FaCss3Alt size={40} /> },
  { name: "CSS3", icon: <FaCss3Alt size={40} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
  { name: "Node JS", icon: <FaNodeJs size={40} /> },
  { name: "Express JS", icon: <SiExpress size={40} /> },
  { name: "MongoDB", icon: <SiMongodb size={40} /> },
  { name: "RESTful APIs", icon: <SiApollographql size={40} /> },
  { name: "JWT", icon: <SiJsonwebtokens size={40} /> },
  { name: "Firebase", icon: <SiFirebase size={40} /> },
  { name: "GIT", icon: <FaGit size={40} /> },
  { name: "GitHub", icon: <FaGithub size={40} /> },
  { name: "Vercel", icon: <SiVercel size={40} /> },
  { name: "Dev-tools", icon: <FaTools size={40} /> },
  { name: "VS-Code", icon: <SiVisualstudiocode size={40} /> },
  { name: "Figma", icon: <FaFigma size={40} /> },
  { name: "Linux OS", icon: <FaLinux size={40} /> },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none"}}
      onClick={onClick}
    />
  );
}
const Skills = () => {

 
  const settings = {
    dots: false,
    infinite: true,
    speed: 10000,
    slidesToShow: 7, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />

  };

  return (
    <div className='skills-container w-full mt-[50px]'>
      <h2 className='text-2xl md:text-4xl text-[#ccd6f6] font-bold mb-6'>Skills</h2>
      <Slider {...settings} className="skills-slider">
        {skills.map((skill, index) => (
          <div key={index} className='skill-item relative py-2 px-2'>
            <div className='text-[#64ffda] hover:text-[#64ffda] flex items-center gap-2'>
              {skill.icon}{skill.name}
            </div>
            {/* <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 p-1 bg-gray-800 text-white text-xs rounded hidden group-hover:block'>
              
            </div> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Skills;
