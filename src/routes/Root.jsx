import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

import { projects, skills } from '../../assets/info.js'

import Nav from '../components/Nav.jsx'
import Project from '../components/Project.jsx'
import Card from '../components/Card.jsx'

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
          {projects.map((project) => {
            return (
              <Project key={project.id} title={project.title} description={project.description} liveurl={project.liveurl} githuburl={project.githuburl} />
            )
            })}
        </section>
        <section className="about-section" id="about">
          <h2>Current Technologies</h2>
          <p>I am currently well versed with the technologies below and I can use them to build fast and effective web applications in a timely manner</p>
          <div className="tech-list">
            {skills.map((skill) => {
              return (
                <Card key={skill.id} name={skill.name} imgUrl={skill.imgUrl} />
              ) 
            })}
          </div>
          <div className="contact-list">
            <p>Interested in working with me? Feel free to reach out.</p>  
            <p>Link to me github</p>
            <p>Link to linkedin</p>
            <p>Link to X ig</p>
          </div>
        </section>
      </main>
    </>
  )
}
