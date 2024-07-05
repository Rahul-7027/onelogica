import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="text-center text-lg-start bg-body-tertiary text-muted">
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                    <div>

                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>

                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <div class="company-info">
                                    <img src="https://onelogica.com/images/logo1.png" alt="Company Logo" class="company-logo" /><h3>Contact-Info</h3>
                                    <p>Hope Tower, 18th Floor, Unit No. TS-1926, Plot No. C-03, Sec-04, Galaxy Blue Sapphire Mall, Greater Noida 201309 </p>
                                    <p>Email: sales@onelogica.com</p>
                                    <p>Contact: +91-9953793025</p></div>
                                    ©  Copyright 2024. All Rights Reserved by Onelogica
                              
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">

                                </h6>
                                <p>
                                    {/* <a href="#!" className="text-reset">Angular</a> */}
                                </p>
                                <p>
                                    {/* <a href="#!" className="text-reset">React</a> */}
                                </p>
                                <p>
                                    {/* <a href="#!" className="text-reset">Vue</a> */}
                                </p>
                                <p>
                                    {/* <a href="#!" className="text-reset">Laravel</a> */}
                                </p>
                            </div>


                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4" style={{marginTop:"55px"}}>
                                <img src="https://onelogica.com/images/mapsLocation.png" height={"200vh"} alt="" />
                            </div>
                            
                        </div>
                    </div>
                </section>

            </footer>
        </div>
    )
}

export default Footer
