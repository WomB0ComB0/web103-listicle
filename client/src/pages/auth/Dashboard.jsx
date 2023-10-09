import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CreatePreference from './crud/CreatePreference'
import DeletePreference from './crud/DeletePreference'
import EditPreference from './crud/EditPreference'
import Preference from './crud/Preference'

const Dashboard = () => {
  return (
    <Routes>
      <Route element={<Preference />} />
      <Route element={<CreatePreference />} />
      <Route element={<EditPreference />} />
      <Route element={<DeletePreference />} />
    </Routes>
  )
}

export default Dashboard
