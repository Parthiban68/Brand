import React from 'react';
import { product } from '../details';
import { Link, useParams } from 'react-router-dom';


const BrandDetails = ({ image,detailid }) => {
  return (
    <>
      <div class="col-12 col-md-12 col-lg-4 mt-2 ">
        <div class="card text-light text-center bg-white pb-2">
          <div class="card-body text-dark">
            <div class="img-area mb-4">
              <img src={image} class="img-fluid" alt="" style={{ height: "150px" }} />
            </div>
            {/* <h3 class="card-title">{name}</h3>
          <p class="lead">{descreption}</p> */}
            <button class="btn bg-warning text-dark"><Link to={`/subproductdetails/${detailid}`} style={{ color: "black", listStyle: "none", textDecoration: "none" }}>View Details</Link></button>
          </div>
        </div>
      </div>
    </>
  )
}


const SubProducts = () => {
  const { id } = useParams();

  const filteredProducts = product.filter(product => product.id == id)

  return (
    <section id="Target" class="Target section-padding">
    <div class="container-sm">
        {filteredProducts.map(product => (
          <div className='row'>
            {product.productdetails.map((image, index) => (
              <BrandDetails index={index} {...image} />
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default SubProducts