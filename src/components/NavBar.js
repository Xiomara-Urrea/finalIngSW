import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <div class="dropdown">
              <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Acerca de nosotros
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <Link className="dropdown-item" to="/">Portafilio<span className="sr-only">(current)</span></Link>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/para_empresas">Para Empresas</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/accesos_de_interes">Accesos de interes</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/normativa">Normativa</Link>
          </li>

        </ul>
      </div>
    </nav>
  </div>
)

export default NavBar
