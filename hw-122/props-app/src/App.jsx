import React, { useState } from 'react'
import './App.css'
import ValueDisplay from './ValueDisplay'

export default function App() {
  const [value, setValue] = useState('')

  return (
    <div className="app">
      <div className="card">
        <h1>Current and Previous Value</h1>

        <input
          type="text"
          placeholder="Type something..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <ValueDisplay value={value} />
      </div>
    </div>
  )
}
