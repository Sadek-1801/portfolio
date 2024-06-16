import React from 'react'
import Button from '../../Components/Button'

const GetInToch = () => {
  return (
    <div className='w-full bg-background flex items-center justify-center'>
        <div className='w-[80%] flex flex-col justify-center items-center text-primary py-[100px] ' >
            <div className='font-medium text-[18px] font-mono '>04. What’s Next?</div>
            <div className='cursor-pointer text-[#ccd6f6] text-[72px] font-medium font-sans'>Get In Touch</div>
            <div className='text-[16px] text-[#8892b0] w-[600px] mb-[50px] font-sans text-center '>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</div>
            <Button title='Say Hello' />
        </div>
    </div>
  )
}

export default GetInToch