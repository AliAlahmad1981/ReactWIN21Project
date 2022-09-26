import React from 'react';
import './About.css';
import '../../assets/css/bootstrap.min.css'
import insta from '../../assets/Instagram.png';
import img from '../../assets/img.png';
import spec from '../../assets/spec.png';

const About = (props) => {
    return (
        <div className='about'>

            <section className="fead-back">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 left-part">
                            <img src={img} alt="" />
                                <div className="left-rectangle">
                                    <img src={insta} alt="" />
                                </div>
                                <div className="client-label text-center position-absolute">
                                    <h6>Kimmie Vo</h6>
                                    <span>Junior Designer</span>
                                </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 right-part">
                            <h2>Successful Student <span>Feedback</span></h2>
                            <p>
                                Take courses from the world’s best instructors and universities. Courses include recorded
                                auto-graded and peer-reviewed assignments, video lectures, and community discussion forums. When you
                                complete a course, you’ll be eligible to receive a shareable electronic Course Certificate for a
                                small fee.
                            </p>

                            <div className="lower-part">
                                <h4>The courses that Kimmie has taken</h4>
                                <div className="d-flex specify">
                                    <img src={spec} alt="" />
                                        <div>
                                            <h5>Modern and Contemporary Art and Design</h5>
                                            <p>
                                                The Museum of Modern Art
                                            </p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default About;
