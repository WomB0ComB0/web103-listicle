import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CreatePreference from './crud/CreatePreference'
import DeletePreference from './crud/DeletePreference'
import EditPreference from './crud/EditPreference'
import Preference from './crud/Preference'

const Dashboard = () => {
  return (
    <Routes>
      <Route path={`/`} element={<Preference />} />
      <Route path={`/new`} element={<CreatePreference />} />
      <Route path={`/edit/:id`} element={<EditPreference />} />
      <Route path={`/view/:id/:name`} element={<DeletePreference />} />
    </Routes>
  )
}

export default Dashboard
