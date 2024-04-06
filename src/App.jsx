import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import LeftCol from './components/LeftCol'
import RightCol from './components/RightCol'
const App = () => {
  return (
    <main className='flex'>
      <Sidebar />
      <div className='flex flex-col flex-1 relative'>
        <Navbar />
        <div className='grid md:grid-cols-3 grid-cols-1 w-full'>
          <div className='col-span-2'><LeftCol /></div>
          <div className='w-full'><RightCol /></div>
        </div>
      </div>
    </main>
  )
}

export default App