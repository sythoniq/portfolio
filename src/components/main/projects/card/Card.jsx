import styles from "./card.module.css"

export default function Card(props) {
	return (
		<div className={styles.projectCard}>
			<div className={styles.projectHead}>
				<h3>{props.projectTitle}</h3>
				<p>{props.projectMeta}</p>
			</div>
			<div className={styles.projectBody}>
				<p>{props.projectDescription}</p>
				<ul className={styles.projectLinks}>
					{props.githubLink && <li><a href={`${props.githubLink}`} target="_blank" rel="noreferrer">GitHub</a></li>}
					{props.liveLink && <li><a href={`${props.liveLink}`} target="_blank" rel="noreferrer">Live demo</a></li>}
				</ul>
			</div>
		</div>
	)
}
