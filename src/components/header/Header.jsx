import styles from './header.module.css'

export default function Header() {
	return (
		<header id="top" className={styles.header}>
			<a href="#top">Abdikadir Warsame</a>
			<nav>
				<ul className={styles.navList}>
					<li><a href="#about">About</a></li>
					<li><a href="#projects">Projects</a></li>
					<li><a href="#exp">Experience</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
			</nav>
		</header>
	)
}
