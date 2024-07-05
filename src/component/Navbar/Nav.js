import React from 'react'
import "./nav.css"

const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                <a className="navbar-brand" href="#" style={{ paddingRight: "38rem" }}>
                    {/* <img src="https://onelogica.com/images/logo1.png" alt="Onelogica Logo" /> */}
                    Onelogica
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto" >
                        <li className="nav-item">
                            <a className="nav-link" href="#">Product & Solutions</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Industry</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Technology</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Resources</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Career</a>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default Nav
