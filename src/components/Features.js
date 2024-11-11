import React from "react";
import '../css/Features.css'
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>

function Features() {
  const featureData = [
    {
      icon: "/images/plansicon.png",
      title: "Personalized Nutrition Plans",
      description: "Receive a tailored nutrition plan designed specifically for your body and goals.",
    },
    {
      icon: "/images/foodIcon.png",
      title: "Food Tracking and Analysis",
      description: "Effortlessly track your food intake using our user-friendly app.",
    },
    {
      icon: "/images/coachingIcon.png",
      title: "Lifestyle and Behavior Coaching",
      description: "Achieve sustainable results with personalized coaching.",
    },
    {
      icon: "/images/coachingIcon.png",
      title: "Guidance from Certified Nutritionists",
      description: "Our team provides professional guidance and support.",
    },
    {
      icon: "/images/recipesIcon.png",
      title: "Meal Planning and Recipes",
      description: "Access a vast collection of healthy recipes tailored to your dietary needs.",
    },
    {
      icon: "/images/educationIcon.png",
      title: "Nutritional Education and Workshops",
      description: "Expand your knowledge of nutrition through informative articles and workshops.",
    },
  ];

  return (
    <section className="container-fluid w-75">
      <div className="row anchor features justify-content-center">
        <h2 className="text-center">Features</h2>
        <p className="description text-center">Welcome to the Feature Section of Nutritionist, your ultimate destination for all things nutrition and wellness.</p>
        <div className="row">
          {featureData.map((feature, index) => (
            <div key={index} className="col card">
              <div className="d-flex justify-content-start align-items-center">
                <img src={feature.icon} alt="Feature Icon" />
                <h3 className="mx-3">{feature.title}</h3>
              </div>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    </section>
  );
}

export default Features;
