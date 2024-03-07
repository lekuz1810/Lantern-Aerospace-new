import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Containerfluid from 'react-bootstrap/Container';
import { FaFacebookSquare, FaInstagram  } from "react-icons/fa";
import { IoIosCall, IoLogoWhatsapp  } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import FooterCSS from './Footer.module.css';
import { Link } from 'react-router-dom';

function FooterSection() {
  return (
    <div >
        <Containerfluid fluid className={FooterCSS.footer_section}>
            <Row>
                <Col xs={12} md={4} lg={4} className={FooterCSS.footer_col_container}>
                    <img className={FooterCSS.footer_logo} src="/images/logo-total.png" alt="" />
                </Col>
                <Col xs={4} md={3} className={FooterCSS.footer_col_container}>
                    <ul className={FooterCSS.footer_list}>
                        <li><Link className={FooterCSS.footer_link} to="/">Explore</Link></li>
                        <li><Link className={FooterCSS.footer_link} to="/Domains" >Domains</Link></li>
                        <li><Link className={FooterCSS.footer_link} to="/Products" >Products</Link></li>
                        <li><Link className={FooterCSS.footer_link} to="/About" >About us</Link></li>
                        <li><Link className={FooterCSS.footer_link} to="/Contact" >Contact us</Link></li>
                    </ul>
                </Col>
                <Col xs={8} md={5} className={FooterCSS.footer_col_container}>
                    <div className={FooterCSS.footer_list}>
                        <div>
                            <h5 className={FooterCSS.footer_heading}>Address:</h5>
                            <p className={FooterCSS.footer_para}> Manjeera Trinity Corporate, Kukatpally, Hyderabad, Telangana. Pin-500074.<br /><span className={FooterCSS.footer_heading}>Contact Number: </span>+91 72077 34509, +91 89852 89552</p>
                        </div>
                        <div>
                            <Link className={FooterCSS.footer_link_icons} to="#"><FaFacebookSquare /></Link>
                            <Link className={FooterCSS.footer_link_icons} to="#" ><FaXTwitter /></Link>
                            <Link className={FooterCSS.footer_link_icons} to="https://www.instagram.com/lantern_upvc" ><FaInstagram /></Link>
                            <Link className={FooterCSS.footer_link_icons} to="#" ><IoLogoWhatsapp  /></Link>
                            <Link className={FooterCSS.footer_link_icons} to="#" ><IoIosCall /></Link>
                        </div>
                    </div>
                </Col>
                <Col xs={12} className={FooterCSS.copyright_bar}>
                    <p className={FooterCSS.copyright_para}>© Copyright 2023 Lantern Aerospace Pvt. Ltd. All Rights Reserved.</p>
                </Col>
            </Row>
        </Containerfluid>
    </div>
  );
}

export default FooterSection ;


