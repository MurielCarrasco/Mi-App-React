import React from "react";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark color-fondo">
            <div className="container-fluid row">
            {/* <img className="foto-logo" href="../assets/img/logo_react-js-png.png"></img> */}
                <a className="navbar-brand col-md-4" href="#">MI APP REACT</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">Promociones</a>
                        <a className="nav-link" href="#">Mujer</a>
                        <a className="nav-link" href="#">Hombre</a>
                        <a className="nav-link disabled">Nosotros</a>
                    </div>
                </div>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>

            </div>
        </nav>
    )
}

export default NavBar;
