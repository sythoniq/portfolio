import styles from "./exp.module.css"

export default function Experience() {
	return (
		<section id="exp" className={styles.exp}>
			<h2>Experience</h2>

			<div className={styles.expJob}>
				<div className={styles.jobDate}>2025 — Present</div>
				<div>
					<div className={styles.jobRole}>Independent Developer</div>
					<p className={styles.jobDesc}>Self-directed learning and development focused on web development. Building practical projects to strengthen my skills in the PERN stack.</p>
				</div>
			</div>
			<div className={styles.expJob}>
				<div className={styles.jobDate}>2025 - Present</div>
				<div>
					<div className={styles.jobRole}>The Odin Project</div>
					<p className={styles.jobDesc}>Completing a project-based full-stack web development curriculum (expected December 2026). Built projects such as Kiseki, Yui and Ichi along the way, working across the front end, back end and database.</p>
				</div>
			</div>
		</section>	
	)
}
