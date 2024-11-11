import React from "react";
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>

function Pricing() {
  return (
    <section className="row anchor price justify-content-center">
      <h2>Our Pricing</h2>
      <p>We outline our flexible and affordable options to support you on your journey to optimal health and nutrition.</p>
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary">Monthly</button>
        <button>Yearly</button>
      </div>
      <div className="row">
        {/* Pricing plans go here */}
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    </section>
  );
}

export default Pricing;
