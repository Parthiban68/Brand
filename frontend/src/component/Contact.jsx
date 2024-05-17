import React from 'react';
export default function Contact() {
  return (
    <section id="contact" className="contact section-padding ">
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-12">
          <div className="section-header text-center pb-5">
            <h2>Contact Us</h2>
          </div>
        </div>
      </div>
      <div className="row m-0">
        <div className="col-md-12 p-0 pt-4 pb-4">
          <form action="#" className="bg-light p-4 m-auto">
            <div className="row">
              <div className="col-md-12">
                <div className="mb-3">
                  <input
                    className="form-control"
                    placeholder="Full Name"
                    required=""
                    type="text"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <input
                    className="form-control"
                    placeholder="Email"
                    required=""
                    type="email"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Message"
                    required=""
                    rows={3}
                    defaultValue={""}
                  />
                </div>
              </div>
              <button
                className="btn btn-lg btn-block mt-3" style={{backgroundColor:"orangered"}}
                type="button" onClick={()=>{alert("send sucsesfully !")}}
              >
                Send Now
              </button>
            </div>
            <div className="social">
              <i className="fa-brands fa-facebook-f" />
              <i className="fa-brands fa-whatsapp " />
              <i className="fa-brands fa-x-twitter" />
              <i className="fa-brands fa-instagram" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  
  )
}
