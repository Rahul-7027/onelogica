import React from 'react'

const Product = () => {
    return (
        <div>
            <h1 className='my-5' style={{textAlign:"center"}}><span style={{color:"red"}}>Our </span>Product</h1>
            <div className="card-group">
                <div className="card mx-2" style={{border:"none"}}>
                    <img className="card-img-top" src="https://onelogica.com/images/GlamLogo.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">GLAM</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div className="">
                    <button style={{marginLeft:"100px"}} type="button" class="btn btn-primary">View Details</button>
                    </div>
                </div>
                <div className="card mx-2" style={{border:"none"}}>
                    <img className="card-img-top" src="https://onelogica.com/images/IsamLogo.png" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">iSAM</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div className="">
                    <button style={{marginLeft:"100px"}} type="button" class="btn btn-primary">View Details</button>
                    </div>
                </div>
                <div className="card mx-2" style={{border:"none"}}>
                    <img className="card-img-top" src="https://onelogica.com/images/EASLogo.png" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">EAS</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div className="">
                    <button style={{marginLeft:"100px"}} type="button" class="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
