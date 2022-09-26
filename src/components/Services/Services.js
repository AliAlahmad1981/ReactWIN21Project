import React from 'react';
import './Services.css';
import '../../assets/css/bootstrap.min.css'
import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.png'
import cardSub1 from '../../assets/card_sub_1.png'
import cardSub2 from '../../assets/card_sub_2.png'
import cardSub3 from '../../assets/card_sub_3.png'

const Services = (props) => {
    return (
        <section className="featured">
            <div className="container">
                <h2 className="text-center">Our Services</h2>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card">
                            <img className="card-img-top" src={card1} alt="Card image cap" />
                            <div className="card-body">
                                <img src={cardSub1} alt="Sub" />
                                <h5 className="card-title">User Research for User Experience Design</h5>
                                <p className="card-text">The Museum of Modern Art</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card">
                            <img className="card-img-top" src={card2} alt="Card image cap" />
                            <div className="card-body">
                                <img src={cardSub2} alt="Sub" />
                                <h5 className="card-title">Buddhism and Modern Psychology</h5>
                                <p className="card-text">The Museum of Modern Art</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card">
                            <img className="card-img-top" src={card3} alt="Card image cap" />
                            <div className="card-body">
                                <img src={cardSub3} alt="Sub" />
                                <h5 className="card-title">Introduction to Philosophy</h5>
                                <p className="card-text">Duke University</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card">
                            <img className="card-img-top" src={card3} alt="Card image cap" />
                            <div className="card-body">
                                <img src={cardSub3} alt="Sub" />
                                <h5 className="card-title">Introduction to Philosophy</h5>
                                <p className="card-text">Duke University</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card">
                            <img className="card-img-top" src={card3} alt="Card image cap" />
                            <div className="card-body">
                                <img src={cardSub3} alt="Sub" />
                                <h5 className="card-title">Introduction to Philosophy</h5>
                                <p className="card-text">Duke University</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card">
                            <img className="card-img-top" src={card3} alt="Card image cap" />
                            <div className="card-body">
                                <img src={cardSub3} alt="Sub" />
                                <h5 className="card-title">Introduction to Philosophy</h5>
                                <p className="card-text">Duke University</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
