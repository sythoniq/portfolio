import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

import { projects, skills } from '../../public/info.js'

import Nav from '../components/Nav.jsx'
import Project from '../components/Project.jsx'
import Card from '../components/Card.jsx'

export default function Root() {
return (
<main className="portfolio">
<Nav />
<section className="hero-section" id="home">
<h3>Built On Curiosity, Refined By Doing</h3>
<p>Hi I am Abdikadir. A fullstack engineer based in Kenya, I
specialize in building web application.</p>
</section>
<section className="projects-section" id="projects">
<h1 style={{color: "white"}}>Projects</h1>
<div className="projects-list">
{projects.map((project) => {
return (
<Project key={project.id} title={project.title} description={project.description} liveurl={project.liveurl} githuburl={project.githuburl} />
)
})}
</div>
</section>
<section className="about-section" id="about">
<h2>Technologies</h2>
<div className="tech-list">
{skills.map((skill) => {
return (
<Card key={skill.id} name={skill.name} imgUrl={skill.imgUrl} />
) 
})}
</div>
</section>
<div className="contact-list">
<p>Interested in working with me? Feel free to reach out.</p>  
<a href="https://github.com/sythoniq" target="_blank" rel="noopener noreferrer"><img src="/svgs/github.svg" /></a>
<a href="https://www.linkedin.com/in/abdikadir-warsame-0034493a5/" target="_blank" rel="noopener noreferrer"><img src="/svgs/linkedin.svg" /></a>
<a href="https://x.com/sythe_dv" target="_blank" rel="noopener noreferrer"><img src="/svgs/x.svg"/></a>
</div>
</main>
)
}
