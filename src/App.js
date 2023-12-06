import React from 'react'
import "./App.css"
import { ApiData } from './pages/ApiData'
import { InfiniteScroll } from './pages/InfiniteScroll'
import { ExcelFilePage } from './pages/ExcelFilePage'
import { Task } from './pages/Task'
import { Card } from './pages/Card'
import { Image } from './pages/Image'
import { Nav } from './pages/Nav'
import { MultistepForm } from './pages/MultiStepForm'
import { Throttle } from './pages/Throttle'
import { Accordion } from './pages/Accordion'
import { BrowserRouter , NavLink , Route ,Routes  } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className='Nav'>
        <NavLink to='/image'>Image Tiles</NavLink>
        <NavLink to='/multistepform'>MultiStepForm</NavLink>
        <NavLink to='/throttle'>Throttle/Debounce</NavLink>
        <NavLink to='/card'>Card</NavLink>
        <NavLink to='/nav'>Nav</NavLink>
        <NavLink to='/accordion'>Accordion</NavLink>
        <NavLink to='/task'>Task</NavLink>
        <NavLink to='/ApiData'>Data</NavLink>
        <NavLink to='/InfiniteScroll'>InfiniteScroll</NavLink>
        <NavLink to='/excel-file'>ExcelFilePage</NavLink>
        </div>
        <Routes>
        <Route path="/multistepform" element={<MultistepForm/>} />
           <Route path="/image" element={<Image/>} />
           <Route path="/throttle" element={<Throttle/>} />
           <Route path="/card" element={<Card/>} />
           <Route path="/nav" element={<Nav/>} />
           <Route path="/accordion" element={<Accordion />} />
           <Route path="/task" element={<Task />} />
           <Route path="/excel-file" element={<ExcelFilePage />} />
           <Route path='/ApiData' element={<ApiData/>}></Route>
           <Route path='/InfiniteScroll' element={<InfiniteScroll/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
