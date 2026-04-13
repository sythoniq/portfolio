import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

import Header from '../components/Header.jsx'

export default function Root() {
  return (
    <main className="aw-portfolio">
      <Header />
      <section className=""
      <Outlet />
    </main>
  )
}
