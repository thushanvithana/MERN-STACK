import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary  ">

<button className="btn btn-primary">
                <a
                  href="http://localhost:3000/"
                  style={{
                    textAlign: "center",
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  {" "}
                 Admin page
                </a>
              </button>


            <div className="container">
                <Link className="navbar-brand  text-white" to="/">User interface home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                            <NavLink className="nav-link text-white"  to="/allstud">All Customer details</NavLink>
                        </li>
                        
                        <li className="nav-item">
                            <NavLink className="nav-link text-white"  to="/addstud">Add New coustomer details</NavLink>
                        </li>
                        
                    </ul>
                    
                </div>
            </div>
        </nav>


    )
}
