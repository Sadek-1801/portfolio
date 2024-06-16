import Header from './Pages/Header/Header'
import Hero from './Pages/HeroSection/Hero'
import About from './Pages/About/About'
import GetInToch from './Pages/Contact/GetInToch'
import Footer from './Pages/Footer/Footer'
import Built from './Pages/Built/Built'
import OtherProjects from './Pages/OtherProjects/OtherProjects'


function App() {

  return (
    <div className='w-full flex flex-col items-center justify-center mx-auto'>
      <div className='w-full bg-[#07101b] flex items-center py-4 justify-between'>
        <div className='w-[90%] flex-col lg:flex-row text-xl flex items-center justify-between mx-auto italic'>
        <p className='text-gray-200'>Email: hmashrafujjaman@gmail.com</p>
        <p className='text-gray-200'>Cell: +880 1533 63 25 62 (What&apos;s app)</p>
        </div>
      </div>
      <Header />
      <Hero />
      <About />
      {/* <Worked /> */}
      <Built />
      <OtherProjects />
      <GetInToch />
      <Footer />
    </div>
  )
}

export default App
