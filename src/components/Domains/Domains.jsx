import React from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DomainsCss from './Domains.module.css'

function Domains() {
    AOS.init();
    AOS.refresh();
  return (
    <div className={DomainsCss.section_5}>
        <Container>
            <Row>
                <Col xs={12} className={`${DomainsCss.section_5_logo_card}`}>
                    <img className={DomainsCss.section_5_logo} src="images/logo-total.png" alt="" />
                    <h1 className={`${DomainsCss.section_5_heading}`}>Domains we work with</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={12} lg={12}>
                    <div className={`${DomainsCss.section_5_grid_container}`}>
                        <div data-aos="zoom-out-up" data-aos-duration="500" className={`${DomainsCss.section_5_grid_item}`}>
                            <img className={`${DomainsCss.section_5_grid_icon}`} src="images/icon1.png" alt="Agriculture" />
                            <p className={`${DomainsCss.section_5_grid_iconname}`}>Agriculture</p>
                        </div>
                        <div data-aos="zoom-out-up" data-aos-duration="1000"className={`${DomainsCss.section_5_grid_item}`}>
                            <img className={`${DomainsCss.section_5_grid_icon}`} src="images/icon2.png" alt="Roads & HighWays" />
                            <p className={`${DomainsCss.section_5_grid_iconname}`}>Roads & HighWays</p>
                        </div>
                        <div data-aos="zoom-out-up" data-aos-duration="1500" className={`${DomainsCss.section_5_grid_item}`}>
                            <img className={`${DomainsCss.section_5_grid_icon}`} src="images/icon3.png" alt="Power T & D" />
                            <p className={`${DomainsCss.section_5_grid_iconname}`}>Power T & D</p>
                        </div>
                        <div data-aos="zoom-out-up" data-aos-duration="2000" className={`${DomainsCss.section_5_grid_item}`}>
                            <img className={`${DomainsCss.section_5_grid_icon}`} src="images/icon4.png" alt="Forests" />
                            <p className={`${DomainsCss.section_5_grid_iconname}`}>Forests</p>
                        </div>
                        <div data-aos="zoom-out-up" data-aos-duration="2500" className={`${DomainsCss.section_5_grid_item}`}>
                            <img className={`${DomainsCss.section_5_grid_icon}`} src="images/icon5.png" alt="Railways & Metro" />
                            <p className={`${DomainsCss.section_5_grid_iconname}`}>Railways & Metro</p>
                        </div>
                        <div data-aos="zoom-out-up" data-aos-duration="3000" className={`${DomainsCss.section_5_grid_item}`}>
                            <img className={`${DomainsCss.section_5_grid_icon}`} src="images/icon6.png" alt="Urbanic Infra" />
                            <p className={`${DomainsCss.section_5_grid_iconname}`}>Urbanic Infra</p>
                        </div>
                        <div data-aos="zoom-out-up" data-aos-duration="500" className={`${DomainsCss.section_5_grid_item}`}>
                            <img className={`${DomainsCss.section_5_grid_icon}`} src="images/icon7.png" alt="Towers Infra" />
                            <p className={`${DomainsCss.section_5_grid_iconname}`}>Towers Infra</p>
                        </div>
                        <div data-aos="zoom-out-up" data-aos-duration="1000" className={`${DomainsCss.section_5_grid_item}`}>
                            <img className={`${DomainsCss.section_5_grid_icon}`} src="images/icon8.png" alt="Resoures" />
                            <p className={`${DomainsCss.section_5_grid_iconname}`}>Resoures</p>
                        </div>
                        <div data-aos="zoom-out-up" data-aos-duration="1500" className={`${DomainsCss.section_5_grid_item}`}>
                            <img className={`${DomainsCss.section_5_grid_icon}`} src="images/icon9.png" alt="Manufacturing Plants" />
                            <p className={`${DomainsCss.section_5_grid_iconname}`}>Manufacturing Plants</p>
                        </div>
                        <div data-aos="zoom-out-up" data-aos-duration="2000" className={`${DomainsCss.section_5_grid_item}`}>
                            <img className={`${DomainsCss.section_5_grid_icon}`} src="images/icon10.png" alt="Minerals & Mines" />
                            <p className={`${DomainsCss.section_5_grid_iconname}`}>Minerals & Mines</p>
                        </div>
                        <div data-aos="zoom-out-up" data-aos-duration="2500" className={`${DomainsCss.section_5_grid_item}`}>
                            <img className={`${DomainsCss.section_5_grid_icon}`} src="images/icon11.png" alt="Energy sector" />
                            <p className={`${DomainsCss.section_5_grid_iconname}`}>Energy sector</p>
                        </div>
                        <div data-aos="zoom-out-up" data-aos-duration="3000" className={`${DomainsCss.section_5_grid_item}`}>
                            <img className={`${DomainsCss.section_5_grid_icon}`} src="images/icon12.png" alt="Infrastructure" />
                            <p className={`${DomainsCss.section_5_grid_iconname}`}>Infrastructure</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Domains
