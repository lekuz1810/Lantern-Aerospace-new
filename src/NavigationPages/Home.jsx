import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import HomePageCSS from './PageCSS.module.css';
import { MdOutlineKeyboardDoubleArrowRight, MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import Domains from '../components/Domains/Domains';
import Contactus from '../components/contactus/contactus';
function Home() {

    AOS.init();
    AOS.refresh();

  return (
    <div>
        <div className={HomePageCSS.intro_section}>
            <Container>
                <Row>
                    <Col xs={{span:12, order:2}} lg={{span:5, order:1}} className={HomePageCSS.main_text}>
                        <h1 className={HomePageCSS.main_heading}>Bringing Drone<br/> technology closer<br/> to you</h1>
                        <p className={HomePageCSS.main_para}>Fixed-wing aircraft & <br/>Vertical Takeoff and<br/> Landing (VTOL) technologies.</p>
                    </Col>
                    <Col xs={{span:12, order:1}} lg={{span:7, order:2}} className={HomePageCSS.main_text}>
                        <img className={HomePageCSS.side_image1} src="images/UAV-talon-motion3.gif" alt="Drone" />
                    </Col>
                </Row>
            </Container>
        </div>
        <div className={HomePageCSS.section_2}>
            <Container>
                <Row>
                    <Col xs={12}>
                        <h1 className={HomePageCSS.Heading_2}>You will Love it How it Works</h1>
                        <p className={HomePageCSS.para_2}>Fixed wing UAVs can carry various payloads and data-link equipment.
                        The fixed-wing has the longest range over any of the other categories.They are remotely controlled or
                         can fly autonomously based on pre-programmed flight plans or dynamic sensors and GPS systems.</p>
                         <p className={HomePageCSS.para_21}>- - We provide First class mapping video and images - -</p>
                    </Col>
                    <Col xs={12} className={HomePageCSS.col_container}>
                        <div className={HomePageCSS.image_container}>
                            <Carousel fade >
                                <Carousel.Item>
                                    <img className={HomePageCSS.Carousel_image} src="images/Homeimage1.jpg" alt="" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className={HomePageCSS.Carousel_image} src="images/Homeimage2.jpg" alt="" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className={HomePageCSS.Carousel_image} src="images/Homeimage3.jpg" alt="" />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className={HomePageCSS.section_3}>
            <Container fluid className={HomePageCSS.section_3_container}>
                <Row className={HomePageCSS.section_3_container}>
                    <Col xs={12} >
                        <h1 className={HomePageCSS.Heading_3}>Aerial Services we offer</h1>
                    </Col>
                    <Col xs={12} className={HomePageCSS.section_3_container}>
                        <div data-aos="fade-right" data-aos-duration="2000" className={HomePageCSS.section_3_card1}>
                            <div className={HomePageCSS.slider_card}>
                                <div className={HomePageCSS.slider_text_card} >
                                    <h1 className={HomePageCSS.slider_heading}>Sensors</h1>
                                    <p className={HomePageCSS.slider_para}>Stabilizers, Gyros/Sensors, and other major core electronics to control.</p>
                                    <button className={HomePageCSS.learn_more}>Learn more <MdOutlineKeyboardDoubleArrowRight/></button>
                                </div>
                                <div className={`${HomePageCSS.slider_image_card}  d-none d-lg-block`}>
                                    <img className={HomePageCSS.slider_image1} src="images/card-sensor.jpg" alt="uav-talon" />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} className={HomePageCSS.section_3_container}>
                        <div data-aos="fade-left" data-aos-duration="2000" className={HomePageCSS.section_3_card2}>
                            <div className={`${HomePageCSS.slider_card}`}>
                                <div className={`${HomePageCSS.slider_image_card} d-none d-lg-block`}>
                                    <img className={HomePageCSS.slider_image2} src="images/card-specifications.jpg" alt="uav-talon" />
                                </div>
                                <div className={HomePageCSS.slider_text_card} >
                                    <h1 className={HomePageCSS.slider_heading}>Specifications</h1>
                                    <p className={HomePageCSS.slider_para}>Main controllers, Fuselage, the wings, and the motors electronic speed controllers (ESCs).</p>
                                    <button className={HomePageCSS.learn_more}><MdOutlineKeyboardDoubleArrowLeft/> Learn more</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} className={HomePageCSS.section_3_container}>
                        <div data-aos="fade-right" data-aos-duration="2000" className={HomePageCSS.section_3_card1}>
                            <div className={HomePageCSS.slider_card}>
                                <div className={HomePageCSS.slider_text_card} >
                                    <h1 className={HomePageCSS.slider_heading}>Platforms</h1>
                                    <p className={HomePageCSS.slider_para}>Real-time Analysis, Agriculture To Inspections, discover the location</p>
                                    <button className={HomePageCSS.learn_more}>Learn more <MdOutlineKeyboardDoubleArrowRight/></button>
                                </div>
                                <div className={`${HomePageCSS.slider_image_card}  d-none d-lg-block`}>
                                    <img className={HomePageCSS.slider_image1} src="images/card-platforms.jpg" alt="uav-talon" />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} className={HomePageCSS.section_3_container}>
                        <div data-aos="fade-left" data-aos-duration="2000" className={HomePageCSS.section_3_card2}>
                            <div className={HomePageCSS.slider_card}>
                                <div className={HomePageCSS.slider_image_card}>
                                    <img className={`${HomePageCSS.slider_image2} d-none d-lg-block`} src="images/card-analysis.jpg" alt="uav-talon" />
                                </div>
                                <div className={HomePageCSS.slider_text_card} >
                                    <h1 className={HomePageCSS.slider_heading}>Analysis</h1>
                                    <p className={HomePageCSS.slider_para}>The distinctive features of the structure and the principles of the design objectives.</p>
                                   <button className={HomePageCSS.learn_more}><MdOutlineKeyboardDoubleArrowLeft/> Learn more</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container >
        </div>
        <div className={HomePageCSS.section_4}>
            <Container fluid className={`${HomePageCSS.section_4_container}`} >
                <Row className={`${HomePageCSS.section_4_container}`}>
                    <Col xs={12} lg={6}>
                        <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500" className={`${HomePageCSS.section_4_card}`}>
                            <div>
                                <h1 className={`${HomePageCSS.section_4_heading}`}>Real-time Analysis Of <br /> The Collected Data</h1>
                                <p className={`${HomePageCSS.section_4_para}`}>Drone provides a quick means to <br />gather information.</p>
                                <Contactus/>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} lg={6}>
                        <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500" className={`${HomePageCSS.section_4_card}`}>
                            <div>
                                <h1 className={`${HomePageCSS.section_4_heading}`}>From Agriculture To<br /> Inspections</h1>
                                <p className={`${HomePageCSS.section_4_para}`}>Agricultural use could comprise <br />80% of the market.</p>
                                <Contactus/>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} lg={6}>
                        <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500" className={`${HomePageCSS.section_4_card}`}>
                            <div>
                                <h1 className={`${HomePageCSS.section_4_heading}`}>We Deliver First Class <br />Videos & Photos</h1>
                                <p className={`${HomePageCSS.section_4_para}`}>With thermal sensors, drones. <br />can quickly discover the location.</p>
                                <Contactus/>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} lg={6}>
                        <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500" className={`${HomePageCSS.section_4_card}`}>
                            <div>
                                <h1 className={`${HomePageCSS.section_4_heading}`}>We Provide <br />Drones-as-a-Service</h1>
                                <p className={`${HomePageCSS.section_4_para}`}>A rapid growth in industrial <br />drone applications.</p>
                                <Contactus/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        {/* Domains code starts, we used as a reusable component */}

        <Domains/>

        {/* Domains code ends,  we used as a reusable component */}
        <div className={`${HomePageCSS.section_6}`}>
            <Container fluid>
                <Row>
                    <Col xs={12}>
                        <h1 className={`${HomePageCSS.section_6_heading}`}>Aerial Photography</h1>
                        <h1 className={`${HomePageCSS.section_6_heading2}`}>We Use The Best Drones & <br />Peripheral Devices</h1>
                        <p className={`${HomePageCSS.section_6_para}`}>The process of refining and extracting essential information from the collected data to produce <br />accurate and actionable results.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className={HomePageCSS.col_container}>
                        <div data-aos="zoom-in" data-aos-duration="2000" className={`${HomePageCSS.section_6_grid_container}`}>
                            <div className={`${HomePageCSS.section_6_grid_item, HomePageCSS.item1}`}>
                                <img className={`${HomePageCSS.section_6_grid_image}`} src="images/grid-img1.jpg" alt="grid-img1" />
                            </div>
                            <div className={`${HomePageCSS.section_6_grid_item}`}>
                                <img className={`${HomePageCSS.section_6_grid_image}`} src="images/grid-img2.jpg" alt="grid-img1" />
                            </div>
                            <div className={`${HomePageCSS.section_6_grid_item}`}>
                                <img className={`${HomePageCSS.section_6_grid_image}`} src="images/grid-img3.jpg" alt="grid-img1" />
                            </div>
                            <div className={`${HomePageCSS.section_6_grid_item, HomePageCSS.item4}`}>
                                <img className={`${HomePageCSS.section_6_grid_image}`} src="images/grid-img4.jpg" alt="grid-img1" />
                            </div>
                            <div className={`${HomePageCSS.section_6_grid_item, HomePageCSS.item5}`}>
                                <img className={`${HomePageCSS.section_6_grid_image}`} src="images/grid-img8.jpg" alt="grid-img1" />
                            </div>
                            <div className={`${HomePageCSS.section_6_grid_item, HomePageCSS.item6}`}>
                                <img className={`${HomePageCSS.section_6_grid_image}`} src="images/grid-img6.jpg" alt="grid-img1" />
                            </div>
                            <div className={`${HomePageCSS.section_6_grid_item}`}>
                                <img className={`${HomePageCSS.section_6_grid_image}`} src="images/grid-img5.jpg" alt="grid-img1" />
                            </div>
                            <div className={`${HomePageCSS.section_6_grid_item}`}>
                                <img className={`${HomePageCSS.section_6_grid_image}`} src="images/grid-img7.jpg" alt="grid-img1" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className={`${HomePageCSS.section_7}`}>
            <Container>
                <Row>
                    <Col xs={{span:12}} lg={{span:6}}>
                        <div data-aos="fade-right" data-aos-duration="2000" className={`${HomePageCSS.section_7_logo_card}`}>
                            <img className={HomePageCSS.section_7_logo} src="images/logo-total.png" alt="" />
                            <h1 className={`${HomePageCSS.section_7_heading}`}>Lignting the Future of Aerospace</h1>
                        </div>
                        <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" data-aos-anchor-placement="center-center">
                            <p className={`${HomePageCSS.section_7_para}`}>We are one of the first UAS (Unmanned Aerial System) businesses to be 100% indigenous, specialises in development, 
                            GIS (Geographic Information System) solutions, videography, and UAV (Unmanned Aerial Vehicle) engineering.</p>
                            <p className={HomePageCSS.section_7_para2}>Why us <br /><span className={HomePageCSS.section_7_para2_span}>Lantern provides High- quality components, robust frames, 
                            and attention to detail during the Aerial Mapping process contribute to the overall build quality.</span></p>

                        </div>
                    </Col>
                    <Col xs={{span:12}} lg={{span:6}} >
                        <div className={`${HomePageCSS} d-none d-lg-block `}>
                            <img id='droneimage' className={HomePageCSS.section_7_drone} src="images/drone-final.png" alt="" />
                        </div>
                        <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" data-aos-anchor-placement="top-center" className={`${HomePageCSS.section_7_grid}`}>
                            <div className={`${HomePageCSS.section_7_griditem}`}>
                                <p className={HomePageCSS.section_7_content}>4500 SqKm + <br /><span className={HomePageCSS.section_7_content_span}>Area Covered</span></p>
                            </div>
                            <div className={`${HomePageCSS.section_7_griditem}`}>
                                <p className={HomePageCSS.section_7_content}>10+ <br /><span className={HomePageCSS.section_7_content_span}>States</span></p>
                            </div>
                            <div className={`${HomePageCSS.section_7_griditem}`}>
                                <p className={HomePageCSS.section_7_content}>1800+ <br /><span className={HomePageCSS.section_7_content_span}>Flown Hours</span></p>
                            </div>
                            <div className={`${HomePageCSS.section_7_griditem}`}>
                                <p className={HomePageCSS.section_7_content}>99.99% <br /><span className={HomePageCSS.section_7_content_span}>Success Rate</span></p>
                            </div>
                            <div className={`${HomePageCSS.section_7_griditem}`}>
                                <p className={HomePageCSS.section_7_content}>1200+ <br /><span className={HomePageCSS.section_7_content_span}>No of Flights</span></p>
                            </div>
                            <div className={`${HomePageCSS.section_7_griditem}`}>
                                <p className={HomePageCSS.section_7_content}>14+ <br /><span className={HomePageCSS.section_7_content_span}>Companies</span></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className={`${HomePageCSS.card_8}`}>
            <h2>"Aeronautics was neither an Industry nor a Science. <br/>It's a Miracle."</h2>
        </div>
        <div className={`${HomePageCSS.card_9}`}>
            <Container>
                <Row>
                    <Col className={`${HomePageCSS.card_9}`}>
                        <h5>Start a conversation to know more about what we have for you... EET</h5>
                        <Contactus/>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
  )
}


export default Home;
