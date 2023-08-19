import {Link} from "react-router-dom"

function Navgation() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <h1 className="navbar-brand">3sam sasa</h1>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={'/AboutUS'}>About US</Link>
        </li>
      </ul>
        </div>
        </div>
    </nav>
    )
}

export default Navgation