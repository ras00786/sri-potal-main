import React from 'react';
import './services.css'; // Make sure to create this CSS file for styling

const Services = () => {
    return (
        <div className="services-container">
            <div className="services-header">
                <h1>Our Services</h1>
                <hr className="services-underline" />
            </div>
            <div className="services-list">
                <div className="service-item">
                    <i className="bi bi-bag-check service-icon"></i>
                    <div className="service-content">
                        <h3 className="service-title">Food Delivery</h3>
                        <p className="service-description">Fast and reliable food delivery from your favorite restaurants.</p>
                    </div>
                </div>
                <div className="service-item">
                    <i className="bi bi-people service-icon"></i>
                    <div className="service-content">
                        <h3 className="service-title">Catering Services</h3>
                        <p className="service-description">Professional catering services for all kinds of events and gatherings.</p>
                    </div>
                </div>
                <div className="service-item">
                    <i className="bi bi-heart service-icon"></i>
                    <div className="service-content">
                        <h3 className="service-title">Special Menus</h3>
                        <p className="service-description">Customizable menus to cater to your dietary preferences and needs.</p>
                    </div>
                </div>
                <div className="service-item">
                    <i className="bi bi-basket service-icon"></i>
                    <div className="service-content">
                        <h3 className="service-title">Orders</h3>
                        <p className="service-description">Easy and convenient online ordering.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
