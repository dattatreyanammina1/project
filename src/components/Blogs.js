import React from "react";
import '../css/Blogs.css'
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>

function Blogs() {
  return (
    <section className="row anchor blogs justify-content-center">
      <h2>Our Blogs</h2>
      <p className="description text-center">
        Our blog is a treasure trove of informative and engaging articles written by our team of nutritionists, dietitians, and wellness experts.
      </p>
      <div className="row" id="postsContainer">
        {/* Map through blog posts here */}
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    </section>
  );
}

export default Blogs;
