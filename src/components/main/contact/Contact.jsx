import styles from "./contact.module.css"

export default function Contact() {
	return (
		<section id="contact" className={styles.contact}>
			<div className={styles.contactText}>
				<h2>Want to work together?</h2>
				<p className={styles.reach}>If you are looking to work with me on a project feel free to reach out to me. Best way to reach me is by email.</p>
				<div className={styles.contactLinks}>
					<a href="mailto:abdikadir2005.a@proton.me" className={styles.textLink}>Mail</a>
					<a href="https://github.com/sythoniq" rel="noreferrer" target="_blank" className={styles.textLink}>GitHub</a>
					<a href="https://linked.com/in/abdikadir-warsame" target="_blank" rel="noreferrer" className={styles.textLink}>LinkedIn</a>
				</div>
			</div>
		</section>
	)
}
