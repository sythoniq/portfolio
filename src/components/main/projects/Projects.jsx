import styles from "./projects.module.css"
import Card from './card/Card.jsx'

export default function Projects() {
	return (
		<section id="projects" className={styles.projects}>
			<h2>Projects</h2>

			<main className={styles.projectsList}>
				<Card 
					projectTitle="Kiseki" 
					liveLink="https://sythoniq.github.io/kiseki/" 
					githubLink="https://github.com/sythoniq/Kiseki" 
					projectMeta="React, React Router, Postgresql, Express, Supabase, Prisma" 	
					projectDescription="A full-stack blogging platform. Users sign up and log in with JWT authentication, and protected routes make sure only signed-in users can write content. The React front end talks to an Express REST API backed by PostgreSQL through Prisma."
				/>
				<Card 
					projectTitle="Yui" 
					liveLink="https://sythoniq.github.io/yui/" 
					githubLink="https://github.com/sythoniq/Yui" 
					projectMeta="React, React Router, Postgresql, Express, Supabase, Prisma" 	
					projectDescription="A full-stack messaging app where users register, log in, send one-to-one direct messages and manage their profiles, including uploading a profile picture. Built with React, Express and PostgreSQL via Prisma, with Supabase handling image storage and JWT handling authentication."
				/>
				<Card 
					projectTitle="Ichi" 
					liveLink="https://sythoniq.github.io/ichi/" 
					githubLink="https://github.com/sythoniq/Ichi" 
					projectMeta="React, React Router, Context API, CSS" 	
					projectDescription="A multi-page shopping cart built with React and React Router. Cart state is shared across pages with the Context API, product data loads asynchronously with error handling for failed requests, and CSS animations cover loading states."
				/>
				<Card 
					projectTitle="Molti" 
					githubLink="https://github.com/sythoniq/molti" 
					projectMeta="C, gcc" 	
					projectDescription="Though still a work in progress. A stack-based virtual machine and interpreter written in C, built while working through Crafting Interpreters. It runs a small language with functions, variables and arithmetic. The long-term goal is a visual front end that shows the stack changing as code runs, to make memory allocation easier to understand."
				/>
			</main>
		</section> 
	)
}
