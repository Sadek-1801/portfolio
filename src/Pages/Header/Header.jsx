import Logo from '../../Components/Header/Logo'

const Header = () => {
  return (
    <>
    <div className='w-full bg-background flex items-center justify-center'>
        <div className='w-[90%] flex justify-between items-center text-primary h-[70px]'>
            <Logo title='P'/>
            <div className='flex items-center justify-around gap-6 text-[14px] font-semibold font-mono'>
                <a href="#about"><div className='cursor-pointer'>About</div></a>
                {/* <div className='cursor-pointer'>Experience</div> */}
                <a href=""><div className='cursor-pointer'>Work</div></a>
                <div className='cursor-pointer'>Contact</div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header