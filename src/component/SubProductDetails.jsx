import React from 'react'
import { useParams } from 'react-router-dom'
import { productdetails } from '../details';


const SubProductCard = ({ image, name, discription, ingredients, use, uses, int, desc, rec }) => {

  return (
    <div class="row">
      <div class="col-lg-4 col-md-12 col-12">
        <div class="about-img">
          <img src={image} alt="" class="img-fluid mt-5" style={{ width: "300px" }} />
        </div>
      </div>
      <div class="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
        <div class="about-text">
          <h5>Product Name: <b style={{ fontSize: "35px" }}>{name}</b></h5>
          <h5><b>{desc}</b></h5>
          <p style={{ fontSize: "18px" }}>{discription}</p>
          <h5><b>{int}</b></h5>
          <p>{ingredients}</p>
          <h5><b>{uses} </b></h5>
          <p>{use}</p>
        </div>
      </div>
    </div>
  )
}



const SubProductDetails = () => {
  const { id } = useParams();

  const filteredProducts = productdetails.filter(productdetails => productdetails.detailid == id)

  return (
    <section id="Target" class="Target section-padding">
      <div class="container-sm">
        {filteredProducts.map(productdetails => (
          <div className='row'>
            {productdetails.descrp.map((details, index) => (
              // <BrandDetails index={index} {...image} />
              <>
                {/* <img src={details.image} alt={details.name} />
                <p key={index}>{details.name}</p>
                <p key={index}>{details.discription}</p>
                <p key={index}>{details.ingredients}</p>
                <p key={index}>{details.Use}</p> */}
                <SubProductCard index={index} {...details} />
              </>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default SubProductDetails