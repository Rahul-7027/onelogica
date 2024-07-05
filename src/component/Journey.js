import React from 'react'

const Journey = () => {
    return (
        <div>
            <footer className="text-center text-lg-start bg-body-tertiary text-muted" style={{border:"none"}}>
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" style={{border:"none"}}>

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
                                    <h3>Join Us on This Journey</h3>
                                    <p>Explore our tech stack showcase a testament to our dedication, expertise, and commitment to delivering solutions that exceed expectations. Dive into the world of possibilities with us and let's embark on this transformative journey together!</p>
                                    <button className='btn btn-primary'>Join US</button>
                                </div>


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


                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4" style={{ marginTop: "55px" }}>
                                <img src="https://www.researchgate.net/profile/Antti-Knutas-2/publication/284644309/figure/fig2/AS:299665451962387@1448457219948/Mindmap-Network-Analysis-of-used-collaboration-tools.png" height={"200vh"} alt="" />
                            </div>

                        </div>
                    </div>
                </section>

            </footer>
        </div>
    )
}

export default Journey
