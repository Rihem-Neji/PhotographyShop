import React from 'react'

function Body() {
  return (
    <div>
      <h3 className="text-center mb-4">Featured materials</h3>

      <div className="d-flex justify-content-center gap-4">

        <div className="card" style={{ width: "18rem" }}>
          <img src="/camera.webp" className="card-img-top" alt="Camera" />
          <div className="card-body">
            <h5 className="card-title">Camera</h5>
            <p className="card-text">
             Professional full-frame camera for photography and 4K video.
              Buy Now
            </p>
            <a href="#" className="btn btn-primary">
              Buy Now
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src="/soft.jpg" className="card-img-top" alt="SoftBox" />
          <div className="card-body">
            <h5 className="card-title">SoftBox</h5>
            <p className="card-text">
              Professional lighting equipment.
              100 DT
            </p>
            <a href="#" className="btn btn-primary">
              Buy Now
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src="/v1.jpg" className="card-img-top" alt="V1" />
          <div className="card-body">
            <h5 className="card-title">V1</h5>
            <p className="card-text">
              Professional photography equipment.
              680DT
            </p>
            <a href="#" className="btn btn-primary">
                Buy Now
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Body