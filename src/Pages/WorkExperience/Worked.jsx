import {useState} from 'react'
import Title from '../../Components/Title'


  const Worked = () => {

    const [selectedOption, setSelectedOption] = useState('Upstatement');

    const handleOptionChange = (newOption) => {
        setSelectedOption(newOption);
    };

  return (
    <div className='w-full bg-background flex flex-col items-center justify-center pt-[100px] pb-[100px]'>
        <div className='flex flex-col items-center justify-start w-[700px]'>
          <div className='w-full flex justify-start items-center py-[20px]  mb-5 ' >
            <Title no='02' name='Where I’ve Worked' />
          </div>

          <div className='flex items-start justify-start gap-[50px] w-[700px] '>
            <div className='flex flex-col items-start justify-start w-[200px] h-[210px] border-l-[2px] border-l-solid border-l-[#8892b0] text-[15px] text-[#8892b0] font-sans font-normal '>
                <button className='py-[10px] px-5 text-left w-full hover:bg-[#112240] hover:text-primary ' onClick={selectedOption === "Upstatement"} onChange={() => handleOptionChange('Upstatement')}>{selectedOption}</button>
                <button className='py-[10px] px-5 text-left w-full hover:bg-[#112240] hover:text-primary ' onClick={selectedOption === "Apple"} onChange={() => handleOptionChange('Apple')}>Apple</button>
                <button className='py-[10px] px-5 text-left w-full hover:bg-[#112240] hover:text-primary ' onClick={selectedOption === "Scout Studio"} onChange={() => handleOptionChange('Scout Studio')}>Scout Studio</button>
                <button className='py-[10px] px-5 text-left w-full hover:bg-[#112240] hover:text-primary ' onClick={selectedOption === "Starry"} onChange={() => handleOptionChange('Starry')}>Starry</button>
                <button className='py-[10px] px-5 text-left w-full hover:bg-[#112240] hover:text-primary ' onClick={selectedOption === "MullenLowe"} onChange={() => handleOptionChange('MullenLowe')}>MullenLowe</button>
            </div>
            
            <div>
            {(() => {
                    switch(selectedOption) {
                        case 'Upstatement':
                            return 
                            <div className='flex flex-col items-start justify-start'>
                              <div className='font-sans text-[22px] font-medium text-primary'>Lead Engineer @ Upstatement</div>
                              <div className='text-[15px] text-[#8892b0] font-sans font-medium'>May 2018 - Present</div>
                              <ul className='list-disc text-[16px] text-[#8892b0] font-sans font-normal flex flex-col gap-[10px] ml-4 mt-4'>
                                  <li>Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more</li>
                                  <li>Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements</li>
                                  <li>Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements</li>
                                  <li>Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship</li>
                              </ul>
                            </div>;

                        case 'option2':
                            return <h4>Selected option 2</h4>;
                                
                        case 'option3':
                            return <h4>Selected option 3</h4>;

                        case 'option4':
                            return <h4>Selected option 3</h4>;

                        case 'option5':
                            return <h4>Selected option 3</h4>;

                        default:
                            return null;
                    }
                })}
            </div>
          </div>
        </div>
    </div>    
  )
}

export default Worked