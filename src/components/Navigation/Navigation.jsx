import NavigationCSS from "./Navigation.module.css";
import { useState } from 'react';
import { Button} from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { RiMenuLine } from "react-icons/ri";
import {Link } from 'react-router-dom';

const Navigation = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return(
        <div className={`${NavigationCSS.NavbarContainer}` }>
            <nav className={NavigationCSS.MainNavbar}>
                <Link className={NavigationCSS.BrandLogo} to="/">
                    <img className={NavigationCSS.logo} src="/images/logo-symbol.png" alt="logo" />
                    <img className={NavigationCSS.logoName} src="/images/logo-name.png" alt="logo" />
                </Link>
                <div className={`${NavigationCSS.navListContainer} d-none d-lg-block`}>
                    <ul className={NavigationCSS.navList}>
                        <li><Link className={NavigationCSS.navLink} to="/">Explore</Link></li>
                        <li><Link className={NavigationCSS.navLink} to="/Doors" >Domains</Link></li>
                        <li><Link className={NavigationCSS.navLink} to="/Windows">Products</Link></li>
                        <li><Link className={NavigationCSS.navLink} to="/About" >About us</Link></li>
                        <li><Link className={NavigationCSS.navLink} to="/Contact" >Contact us</Link></li>
                    </ul>
                </div>
                <Button className={`${NavigationCSS.Offcanvas_button} d-block d-lg-none`} onClick={handleShow}>
                    <RiMenuLine/>
                </Button>
                <Offcanvas show={show} onHide={handleClose} className={`${NavigationCSS.Offcanvas_container}`}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>
                            <Link className={NavigationCSS.BrandLogo} to="/">
                                <img className={NavigationCSS.logo} src="/images/logo-symbol.png" alt="logo" />
                                <img className={NavigationCSS.logoName} src="/images/logo-name.png" alt="logo" />
                            </Link>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <ul className={NavigationCSS.OffcanvasList}>
                            <li><Link className={NavigationCSS.OffcanvasLink} to="/">Explore</Link></li>
                            <li><Link className={NavigationCSS.OffcanvasLink} to="/Doors" >Domains</Link></li>
                            <li><Link className={NavigationCSS.OffcanvasLink} to="/Windows" >Products</Link></li>
                            <li><Link className={NavigationCSS.OffcanvasLink} to="/About" >About us</Link></li>
                            <li><Link className={NavigationCSS.OffcanvasLink} to="/Contact" >Contact us</Link></li>
                        </ul>
                    </Offcanvas.Body>
                </Offcanvas>
            </nav>
        </div>
    )
};

export default Navigation;