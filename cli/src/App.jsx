import { useState } from 'react'
import './App.css'


// 1. Koppla wallet till ett objekt med namn, ålder och nationalitet
// 2. Verifiera ålder med zk proof


function App() {

  const personArray = [{
    name: "Martin",
    age: 26,
    nationality: "Swedish"
  },
  {
    name: "Juan",
    age: 18,
    nationality: "Spanish"
    },
    {
      name: "Eric",
      age: 56,
      nationality: "Brittish"
    },
  ]

  return (
    <>
      <div className="container">
        <h1 className="title">Zero-Knowledge Access App</h1>
        <button onClick={() => console.log(personArray)}>Show persons</button>

      </div>
    </>
  )
}

export default App
