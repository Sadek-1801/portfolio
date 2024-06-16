import PropTypes from "prop-types"
const Logo = ({title}) => {
  return (
    <button className='border-2 border-solid border-fontColor text-[24px] font-bold py-1 px-3 rounded hover:translate-x-[-4px] hover:translate-y-[-4px] hover:duration-300 hover:shadow-[3px_3px_0px_0px_rgba(100,255,218)] '>{title}</button>
    // [clip-path:polygon(50%_0%,100%_21%,100%_74%,52%_100%,0_75%,0_21%)]
  )
}
Logo.propTypes = {
  title: PropTypes.any
}
export default Logo