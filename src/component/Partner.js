import React from 'react'
import "./parnter.css"

const Partner = () => {
    return (
        <div>
            <h1 className='my-5' style={{ textAlign: "center" }}><span style={{ color: "red", textAlign: "center", fontSize: "3.8rem" }}>Our</span> Parnter</h1>
            <p style={{ fontSize: "20px", marginTop: "25px", textAlign: "center" }}>While we are at the forefront of and specialize in design-build, we are very familiar with a number of delivery methods and are confident we can find the process that will best help you meet your goals.</p>

            <div class="images">
                <img  style={{height:"20vh"}}src="https://isamblobstorage.blob.core.windows.net/isamfilecotainer/PartnersImages/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg" alt="Microsoft" class="imagePartners" />
                <img  style={{height:"20vh"}}src="https://isamblobstorage.blob.core.windows.net/isamfilecotainer/PartnersImages/Databricks_Logo.png" alt="Databricks" class="imagePartners" />
                <img  style={{height:"20vh"}}src="https://isamblobstorage.blob.core.windows.net/isamfilecotainer/PartnersImages/image (18).png" alt="AWS" class="imagePartners" />
                <img  style={{height:"20vh"}}src="https://isamblobstorage.blob.core.windows.net/isamfilecotainer/PartnersImages/image (19).png" alt="DBT" class="imagePartners" />
            </div>

        </div>
    )
}

export default Partner
