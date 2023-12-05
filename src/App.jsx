import About from './components/About';
import Header from './components/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';
function App() { 
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App;
