export default function Project({title, description, liveurl, githuburl}) {
  return (
    <div className="project-card">
      <p>Have an image here</p>
      <div className="project-description">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className="project-links">
        <p><a href={githuburl}><img src="/svgs/github.svg"/></a></p> 
        <p><a href={liveurl}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>open-in-new</title><path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" /></svg></a></p>
      </div>
    </div>
  )
}
