import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

import Nav from '../components/Nav.jsx'

export default function Root() {
  return (
    <>
      <Nav />
      <main className="aw-portfolio">
        <section className="hero-section" id="home">
          <h3>Built On Curiosity, Refined By Doing</h3>
          <p>Hi I am Abdikadir. A fullstack engineer based in Kenya, I
            specialize in building web application. But still eager to learn.</p>
        </section>
        <section className="projects-section" id="projects">
          
        </section>
        <section className="about-section" id="about">

        </section>
      </main>
    </>
  )
}
