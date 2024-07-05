import React from 'react'
import "./Card.css"
import CardSection from '../CardSection'
import Product from '../Product'
import Partner from '../Partner'
import Footer from '../Footer'
import Journey from '../Journey'
import "../cardSection.css"

const Card = () => {
    return (
        <>
            {/* <h2 className='my-5' style={{textAlign:"center"}}><span style={{color:"red",textAlign:"center"}}>Our </span> Product</h2> */}

            <div className="card mb-3 col d-flex justify-content-center my-5" style={{ margin: "50px 50px 50px 50px", border: "none" }}>
                <div className="row g-0 my-5">
                    <div className="col-md-4" style={{ border: "14px solid black", borderRadius: "29px" }}>
                        <img src="https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?size=626&ext=jpg" className="img-fluid rounded-start" alt="..." style={{height:"315px"}}/>
                    </div>
                    <div className="col-md-8 my-5">
                        <div className="card-body">
                            <h1><span style={{ color: "red", fontSize: "74px", }}>WE </span> <span style={{ fontSize: "larger" }}>PROVIDE SMART APPLICATION USING CLOUD AND LEADING EDGE TECHNOLOGIES</span></h1>

                        </div>
                    </div>
                </div>
                <div className="container info-section" style={{ backgroundColor: "#626291", marginTop: "30px", borderRadius: "30px" }}>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="info-box">
                                <p className="display-4">100+</p>
                                <p>Years of collective expertise</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="info-box">
                                <p className="display-4">5+</p>
                                <p>Products</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="info-box">
                                <p className="display-4">20+</p>
                                <p>Solutions</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="info-box">
                                <p className="display-4">50+</p>
                                <p>Strong minds, one unified vision</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container custom-section my-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <h4 className="text-primary">WHAT WE DO...</h4>
                            <h1 className="font-weight-bold text-primary">EMPOWER YOUR JOURNEY WITH OUR ADVANCED CLOUD APPLICATIONS.</h1>
                            <p>At Onelogica, we're experts in developing cutting-edge smart applications, leveraging cloud technology for digital innovation. Our proficiency extends to Smart Applications, Data Analytics, Big Data, Machine Learning, and Artificial Intelligence. We stand out for delivering ready-to-use, highly innovative solutions. Moreover, we support organizations in business modernization through custom applications, harnessing leading-edge technologies like Generative AI for optimal transformation.</p>
                            <h3 className="font-weight-bold text-primary">LET'S TRANSFORM TOGETHER!</h3>
                            <div className="mt-4">
                                <button className="btn btn-outline-primary contact">Contact Us</button>
                                <button className="btn btn-primary ml-2 mx-3 product">Products</button>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img style={{ height: "21rem", width: "auto", marginTop: "32px" }} src="https://onelogica.com/images/AboutUsIMG.jpg" alt="Cloud Applications" className="custom-img" />
                        </div>
                    </div>
                </div>

                <CardSection />
                <Product />
                <Partner />
                <Journey/>
                <Footer />
            </div>
        </>
    )
}

export default Card
