import React from 'react'
import { Link, useLocation } from 'react-router-dom'
const NavBar =()=> {

    const location = useLocation();
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" >
  <div className="container-fluid" >
    <Link className="navbar-brand" to="/">NewsApp</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav nav-pills me-auto mb-2 mb-lg-0" >
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/">About</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/business"?"active":""}`} to="/business">Business</Link>
        </li> <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/entertainment"?"active":""}`} to="/entertainment">Entertainment</Link>
        </li> <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/general"?"active":""}`} to="/">General</Link>
        </li> <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/health"?"active":""}`} to="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/science"?"active":""}`} to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/sports"?"active":""}`} to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/technology"?"active":""}`} to="/technology">Technology</Link>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
      </div>
    )
  
}

export default NavBar
