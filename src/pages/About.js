import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

export default class About extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/2.png"
              alt="First slide"
            />

            <Carousel.Caption>
              <img
                src="assets/s1.png"
                width="30%"
                style={{ marginBottom: 25 }}
              ></img>
              <h3>DELICIOUS, HANDCRAFTED BEVERAGES AND GREAT-TASTING FOOD</h3>
              <p>The secret to making life better.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/4.png"
              alt="Second slide"
            />

            <Carousel.Caption>
              <img
                src="assets/s2.png"
                width="30%"
                style={{ marginBottom: 25 }}
              ></img>
              <h3>JO'S CAFE BEVERAGES</h3>
              <p>
                Amazing coffees from around the world. Handcrafted beverages to
                discover and enjoy. We love bringing you these things.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="assets/6.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <img
                src="assets/s3.png"
                width="30%"
                style={{ marginBottom: 25 }}
              ></img>
              <h3>FRESH FOOD</h3>
              <p>
                Our pastries and sandwichenpm s are made with high-quality,
                simple ingredients. So all the goodness you taste is real food,
                simply delicious.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <section className="section">
          <div className="container" style={{ marginTop: 10 }}>
            <div className="card shadow">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <h6>Contact Form</h6>
                    <hr />
                    <div className="form-group">
                      <label className="mb-1">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Full Name"
                      />
                    </div>
                    <div className="form-group">
                      <label className="mb-1">Phone Number</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Phone Number"
                      />
                    </div>
                    <div className="form-group">
                      <label className="mb-1">Email Address</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Email Address"
                      />
                    </div>
                    <div className="form-group">
                      <label className="mb-1">Message</label>
                      <textarea
                        rows="3"
                        className="form-control"
                        placeholder="Type for message..."
                      ></textarea>
                    </div>
                    <div className="form-group py-3">
                      <a href="/about">
                        <Button variant="primary shadow w-100">
                          Send Message
                        </Button>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 border-start">
                    <h5 className="main-heading">Address Information</h5>
                    <div className="underline"></div>
                    <p>Graha Bintaro, South Tangerang - 15776, Indonesia</p>
                    <p>Phone: 081234567890</p>
                    <p>Email: joscafe@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

/* return (
      <div className="text-center">
        <Image src="assets/images/about.png" width="100%" />
        <h2>Receipt dikirim ke Bar dan Kitchen</h2>
        <p>Ceritanya ga pake struk ya mas</p>
        <a href="/Home">
          <Button variant="primary">Order</Button>{" "}
        </a>
        <a href="/">
          <Button variant="primary">Close</Button>{" "}
        </a>
      </div>
    ); 
  } */
