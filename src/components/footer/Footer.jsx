import styles from './footer.module.css'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerInner}>
				<span>Abdikadir Warsame</span>
				<span>© {new Date().getFullYear()} Abdikadir Warsame</span>
			</div>
		</footer>	
	)
}
