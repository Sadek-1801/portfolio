import PropTypes from "prop-types"

const Button = ({title}) => {
  return (
    <div>
        <button className='border-[1px] border-solid border-fontColor font-mono py-2 px-5 rounded hover:translate-x-[-4px] hover:translate-y-[-4px] hover:duration-300 hover:shadow-[3px_3px_0px_0px_rgba(100,255,218)]'>{title}</button>
    </div>
  )
}
Button.propTypes = {
  title: PropTypes.string
}
export default Button