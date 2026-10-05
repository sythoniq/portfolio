import styles from './about.module.css'

export default function About() {
	return (
		<section id="about" className={styles.about}>
			<h2>About</h2>
			<div className={styles.aboutText}>
				<p>I'm a final-year Information Technology student based in Nairobi. I enjoy learning something new every day, and I'm currently focused on building full-stack web applications.</p>
				<p>I work mostly with JavaScript, React, Node.js, Express, PostgreSQL and Prisma, and I'm also comfortable with Python, C, Git, Linux and GitHub Actions (CI/CD).</p>			
				<p>Outside of software engineering and building web applications, I have developed an interest in security and I have started learning matters to do with software security. It has been and continues to be an eye opening journey down the path of securing software for data privacy, user safety and many other things.</p>
				<p>I have also been deeply fascinated by how computers work at the low level away from all the abstraction and have been dedicating some time to learn how things work under the hood. I firmly believe in understanding things like this even in the advent of AI, as I believe that by knowing the intricacies it becomes easier to manage and protect software.</p>
			</div>
		</section>
	)
}
