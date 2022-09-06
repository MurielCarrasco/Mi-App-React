import React from "react";
import Logo from "../../assets/logo.png";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark color-fondo">
            <div className="container-fluid row">
                <img className="foto-logo" src={Logo} href=""></img>
                <a className="navbar-brand col-md-3" href="#">CLOTHES AND SHOES</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse col-md-4" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">Promociones</a>
                        <a className="nav-link" href="#">Mujer</a>
                        <a className="nav-link" href="#">Hombre</a>
                        <a className="nav-link disabled">Nosotros</a>
                    </div>
                </div>
                <form className="d-flex col-md-3">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-light" type="submit">Search</button>
                </form>
                <div className="col-md-2 d-flex align-items-center justify-content-center" >
                    <a href=""> <CartWidget /> </a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
