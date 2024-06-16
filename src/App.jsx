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
