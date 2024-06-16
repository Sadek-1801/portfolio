import PropTypes from "prop-types"
import { Fade } from "react-awesome-reveal"

const Title = ({name, no}) => {
  return (
    <div  className='flex items-center justify-start w-full gap-[10px]'>
        <div className='flex items-end justify-start gap-[10px]'>
          <div className='font-mono text-[22px] text-primary'>{no}.</div>
          <div className='font-sans text-[28px] font-bold text-primary'>
           <Fade cascade delay={300} damping={1e-1}>{name}</Fade> 
            </div>
        </div>
        <hr className='w-[300px] border-[#233554]'/>
    </div>
  )
}
Title.propTypes = {
  name: PropTypes.string,
  no: PropTypes.any
}

export default Title