import React from "react";
import '../css/HeroSection.css'
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>

function HeroSection() {
  return (
    <section className="container-fluid p-0">
      <div className="row">
        <div className="col m-0 p-0">
          <img src="../src/assets/headerImg.png" className="w-100" alt="Header" />
        </div>
        <div className="col m-0 p-0">
          <div className="col w-75">
            <div className="hero">
              <h3>Transform Your ❤️ Health with</h3>
              <h1 className="fw-bold">Personalized Nutrition Coaching</h1>
              <p className="fw-normal">
                Welcome to Nutritionist, your partner in achieving optimal health through personalized nutrition
                coaching. Our certified nutritionists are here to guide you on your weight loss journey, providing
                customized plans and ongoing support.
              </p>
              <div className="d-flex w-100 ctaWrapper">
                <a href="/" className="d-flex fw-bolder fs-6 btnCTA btnStarter m-0">Get Started Today</a>
                <a href="/" className="d-flex fw-bolder fs-6 btnCTA btnDemo">Book a Demo</a>
              </div>
              <div className="customers w-100 d-flex align-items-center">
                <div className="customersImg justify-content-center d-flex">
                  <img className="customerImg" src="/images/customer1.png" alt="Customer 1" />
                  <img className="customerImg" src="/images/customer2.png" alt="Customer 2" />
                  <img className="customerImg" src="/images/customer3.png" alt="Customer 3" />
                </div>
                <span className="customerCount fw-bold d-flex mx-1">430+</span>
                <span className="fw-bold d-flex mx-1">Happy Customers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    </section>
  );
}

export default HeroSection;
