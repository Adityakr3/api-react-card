import React from 'react'
import "./App.css"
import { InfiniteScroll } from './pages/InfiniteScroll'
// import { Sorting } from './pages/Sorting'
// import { ApiData } from './pages/ApiData'
// import { BrowserRouter , NavLink , Route ,Routes  } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <InfiniteScroll/>
      {/* <BrowserRouter>
        <div className='Nav'>
        <NavLink to='/ApiData'>Data</NavLink>
        <NavLink to='/Sorting'>Sorted Data</NavLink>
        </div>
        <Routes>
           <Route path='/ApiData' element={<ApiData/>}></Route>
           <Route path='/Sorting' element={<Sorting />}></Route>
        </Routes>
      </BrowserRouter> */}

    </div>
  )
}

export default App
