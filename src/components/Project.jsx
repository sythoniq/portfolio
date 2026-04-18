export default function Project({title, description, liveurl, githuburl}) {
  return (
    <div className="project-card">
      <p>Have an image here</p>
      <div className="project-description">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="project-links">
          <button><a href={liveurl}>Live Demo</a></button>
          <button><a href={githuburl}>Github</a></button>
        </div>
      </div>
    </div>
  )
}
