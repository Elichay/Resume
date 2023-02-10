import React from 'react'
import { Routes, Route } from 'react-router'
import { Resume } from './pages/resume'


function RootCmp() {
  return (
 <main>
  <Routes>
    <Route element={<Resume />} path='/' />
  </Routes>
</main>
)
}

export default RootCmp
