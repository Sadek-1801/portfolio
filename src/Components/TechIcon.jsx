import PropTypes from "prop-types"

const TechIcon = ({ IconComponent, label, color }) => (
  <div className='relative group'>
    <IconComponent size={20} className={`${color} group-hover:text-[#64ffda] transition-colors duration-300`} />
    <span className='absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 p-1 bg-gray-800 text-white text-xs rounded hidden group-hover:block'>
      {label}
    </span>
  </div>
);

TechIcon.propTypes = {
    IconComponent: PropTypes.any,
    label: PropTypes.string,
    color: PropTypes.any 
}
export default TechIcon;
