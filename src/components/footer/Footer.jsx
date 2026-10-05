import styles from './footer.module.css'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerInner}>
				<span>Abdikadir Warsame</span>
				<nav className={styles.footerLinks}>
					<a href="https://github.com/sythoniq" target="_blank" rel="noreferrer">GitHub</a>
					<a href="https://linkedin.com/in/abdikadir-warsame" target="_blank" rel="noreferrer">LinkedIn</a>
				</nav>
				<span>© {new Date().getFullYear()} Abdikadir Warsame</span>
			</div>
		</footer>	
	)
}
