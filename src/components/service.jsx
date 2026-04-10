import React from "react";

export default function Services() {
    const services = [
        "web Development",
        "Frontend React Development",
        "next.js Full-stack Apps",
        "Cybersecurity Testing",
        "API & Database Setup",
        "Data Analysis",
    ];
    return (
        <section className="services-section">
            <h2>
                Services
            </h2>

            <div className="services-grid">
                {services.map((item, index) => (
            <div
            key= {index}
            className="service-card"
        >
        {item}
        </div>
                ))}
                </div>
                </section>
    );
} 