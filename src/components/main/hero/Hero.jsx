import styles from "./hero.module.css"

export default function Hero() {
	return (
		<section id="top" className={styles.hero}>
			<h1>Abdikadir Warsame</h1>
			<p className={styles.role}>Software Engineer</p>
			<p className={styles.heroText}>I build web applications and spend lots of time learning new things within the world of tech.</p>
			<li className={styles.heroLinks}>
				<ul><a href="github.com/sythoniq" target="_blank" rel="noreferrer">Github</a></ul>
				<ul><a href="linkedin.com/in/abdikadir-warsame" target="_blank" rel="noreferrer">LinkedIn</a></ul>
				<ul><a href="mailto:abdikadir2005.a@proton.me" target="_blank" rel="noreferrer">Mail</a></ul>
			</li>
		</section>
	)
}
