import styles from "./main.module.css"

import Hero from './hero/Hero.jsx'
import About from './about/About.jsx'
import Projects from './projects/Projects.jsx'
import Experience from './experience/Experience.jsx'
import Contact from './contact/Contact.jsx'

export default function Main() {
	return (
		<main id="main" className={styles.main}>
			<Hero />
			<About />
			<Projects />
			<Experience />
			<Contact />
		</main>	
	)
}
