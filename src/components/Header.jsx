import { Link } from 'react-router-dom' 

export default function Header() {
  return (
    <header className="page-heading">
      <Link to="/">
        <div className="logo-img">
          <p>Place image/logo here, not ss tho lel</p>
        </div>
      </Link>
      <div className="nav-links">
        <Link to="about">
          <h4>About</h4>
        </Link>
        <Link to="contact">
          <h4>Contact</h4>
        </Link>
      </div>
    </header>
  )
}
