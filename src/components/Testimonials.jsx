import React from "react";
import Testimonials from "./components/Testimonials";

const data = [
  {
    name: "John Doe",
    role: "Product Manager • Fintech Corp",
    text: "Working with you was seamless. Delivery was fast, clean, and exceeded expectations."
  },
  {
    name: "Sarah Ahmed",
    role: "Startup Founder • PayStack Partner",
    text: "Highly professional developer. Communication and execution were top-notch."
  },
  {
    name: "Michael Lee",
    role: "CTO • Web3 Startup",
    text: "Strong technical knowledge and very reliable. Would definitely work together again."
  },
  {
    name: "Daniel Okafor",
    role: "CEO • TechNova Africa",
    text: "Your attention to detail and problem-solving skills helped us scale our platform efficiently."
  },
  {
    name: "Aisha Bello",
    role: "UI/UX Designer • DesignMint",
    text: "Clean code, great collaboration, and a strong understanding of product needs."
  },
  {
    name: "Samuel Johnson",
    role: "Software Engineer • CloudX Systems",
    text: "Very dependable and technically solid. Always delivered on time with quality."
  }
];

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        {data.map((item, i) => (
          <div className="card" key={i}>
            <p className="text">"{item.text}"</p>
            <h3>{item.name}</h3>
            <span>{item.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;