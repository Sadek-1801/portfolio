import Title from '../../Components/Title';

const GetInTouch = () => {
  return (
    <div id='contact' className='w-full bg-background flex flex-col items-center justify-center pt-20 pb-20'>
      <div className='w-11/12 lg:w-4/5 flex flex-col items-center'>
        <div className='w-full flex justify-start items-center py-5 mb-5'>
          <Title no='04' name='Contact' />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start'>
          <div className='flex flex-col justify-center items-start text-primary'>
            <div className='cursor-pointer text-[#ccd6f6] text-[36px] md:text-[72px] font-medium font-sans mb-4'>Get In Touch</div>
            <div className='text-[16px] text-[#8892b0] w-full mb-[20px] md:mb-[50px] font-sans'>
            I&apos;m a passionate web development and programming. I&apos;m always looking for new challenges. Let&apos;s discuss your project!
            </div>
          </div>
          <form className='w-full flex flex-col'>
            <label className='text-[#ccd6f6] mb-2' htmlFor='name'>Name</label>
            <input
              className='p-2 mb-4 bg-transparent border-[1px] border-solid border-fontColor rounded text-white'
              type='text'
              id='name'
              name='name'
              placeholder='name'
              required
            />
            <label className='text-[#ccd6f6] mb-2' htmlFor='email'>Email</label>
            <input
              className='p-2 mb-4 bg-transparent border-[1px] border-solid border-fontColor rounded  text-white'
              type='email'
              id='email'
              name='email'
              placeholder='@gmail.com'
              required
            />
            <label className='text-[#ccd6f6] mb-2' htmlFor='message'>Message</label>
            <textarea
              className='p-2 mb-4 bg-transparent border-[1px] border-solid border-fontColor rounded'
              id='message'
              name='message'
              placeholder='Your Message'
              rows='5'
              required
            />
            <button type='submit' className='text-primary border-[1px] border-solid border-fontColor font-mono py-2 px-5 rounded hover:translate-x-[-4px] hover:translate-y-[-4px] hover:duration-300 hover:shadow-[3px_3px_0px_0px_rgba(100,255,218)]'>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
