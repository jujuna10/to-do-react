import { useState } from 'react'
import Header from './components/Header'
import AddMission from './components/AddMission'
import { DataProvider } from './components/context/DataContext'
import MissionDisplay from './components/MissionDisplay'

function App() {

  return (
    <DataProvider>
      <div className='flex justify-between'>
        <Header />
        <AddMission />
      </div>
      <MissionDisplay />
    </DataProvider>
  )
}

export default App
