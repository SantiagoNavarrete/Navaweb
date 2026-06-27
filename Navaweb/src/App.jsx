import './App.css'
import './styles/global.css'
import Navigation from './components/Navigation.jsx'
import Hero from './components/Hero.jsx'
import Divider from './components/Divider.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import Process from './components/Process.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Divider />
      <Services />
      <About />
      <Process />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
