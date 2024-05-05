import React from 'react';
import { card1 } from '../details';
import { Link } from 'react-router-dom';


const BrandCard = ({ name, descreption, image, productid }) => {
  return (
    <>
    <div class="col-12 col-md-12 col-lg-4 mt-2">
      <div class="card text-light text-center bg-white pb-2">
        <div class="card-body text-dark">
          <div class="img-area mb-4">
            <img src={image} class="img-fluid" alt="" style={{ height: "200px" }} />
          </div>
          <h3 class="card-title">{name}</h3>
          <p class="lead">{descreption}</p>
          <button class="btn bg-warning text-dark"> <Link to={`/subproduct/${productid}`} style={{ color: "black", listStyle: "none", textDecoration: "none" }}>View Products</Link></button>
        </div>
      </div>
    </div>
    </>
  )
}


const Prodect = () => {
  return (
    <section id="Target" class="Target section-padding">
      <div class="container-sm">
        <div class="row">
          <div class="col-md-12">
            <div class="section-header text-center pb-1">
              <h2>Brands</h2>
            </div>
          </div>
        </div>
        <div className='row'>
          {card1.map((card1, index) => (
            <BrandCard index={index} {...card1} />
          ))}
        </div>
      </div>
    </section>


  )
}

export default Prodect