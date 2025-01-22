import { useState } from 'react'
import TopBar from './components/topbar/TopBar.jsx';
import { BrowserRouter } from 'react-router'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import Footer from './components/footer/Footer.jsx'
import './App.css'

function App(){

  function handleIsDarkFromLocalStorage(){
    let currentOption = localStorage.getItem("theme");
    if(currentOption == 'true'){
      return true
    }else if(currentOption == 'false'){
      return false
    } else {
      return true
    }
  }

  const [isDark, setIsDark] = useState(handleIsDarkFromLocalStorage());
  const [page, setPage] = useState(()=>{
    const { pathname } = window.location
    const page = pathname.slice(1)
    return page
  })

  const toPage = page => () => {
    setPage(page)
  }

  function getContent(){
    switch(page){
      case 'projects':
        return <Projects/>
      case 'contact':
        return <Contact/>
      case 'about':
        return <About/>
      default:
        return <Home/>
    }
  }

  return (
    <BrowserRouter>
      <div className='app' data-theme={isDark ? 'dark' : 'light'}>
        <TopBar isDark={isDark} setIsDark={setIsDark} toPage={toPage}/>
        <div className='page-content'>
          <div className='content'>
            {getContent()}
          </div>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
