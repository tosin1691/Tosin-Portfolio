import Navbar from './components/Navbar'
import SideBar from './components/Sidebar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/skills'
import ProjectGallery from './components/ProjectGallery'
import Contact from './components/Contact'

function App() {

  return (
    <div className='bg-gray-800'>
    <SideBar />
    <Navbar />
    <Home />
    <About />
    <Skills />
    <ProjectGallery />
    <Contact />

    </div>
  )
}

export default App
