export default function Card({name, imgUrl}) {
  return (
    <div className="skill-card">
      <img src={imgUrl} alt="Image of a tech skill" />
      <p>{name}</p>
    </div>
  )
}
