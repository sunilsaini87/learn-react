import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='bg-green-600 text-black p-4 rounded-xl'>Tailwind test</h1>
      <Card username='sunil' btnTxt='click here' />
      <Card username='sunil saini' />
    </>
  )
}

export default App
