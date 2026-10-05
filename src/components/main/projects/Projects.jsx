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
					projectDescription="The project descriptions can be plopped here"
				/>
				<Card 
					projectTitle="Yui" 
					liveLink="https://sythoniq.github.io/yui/" 
					githubLink="https://github.com/sythoniq/Yui" 
					projectMeta="React, React Router, Postgresql, Express, Supabase, Prisma" 	
					projectDescription="The project descriptions can be plopped here"
				/>
				<Card 
					projectTitle="Ichi" 
					liveLink="https://sythoniq.github.io/ichi/" 
					githubLink="https://github.com/sythoniq/Ichi" 
					projectMeta="React, React Router, Postgresql, Express, Supabase, Prisma" 	
					projectDescription="The project descriptions can be plopped here"
				/>
				<Card 
					projectTitle="Molti" 
					githubLink="https://github.com/sythoniq/molti" 
					projectMeta="C, gcc" 	
					projectDescription="The project descriptions can be plopped here"
				/>
			</main>
		</section> 
	)
}
