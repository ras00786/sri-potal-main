import React, { useState } from 'react';
import './contactUs.css';
import contactUs from '../../../assets/contactUs.png'; // Make sure to have this image in the specified path

const ContactUs = () => {
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle form submission, e.g., sending data to a server.
        setShowPopup(true);
        setEmail('');
        setComment('');
        setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
    };

    return (
        <div className="contact-us-container">
            <div className="contact-us-content">
            <h1>Stay Connected With Us 🌟📧</h1> 
                <form onSubmit={handleSubmit} className="contact-us-form">
                    <div className="form-group">
                        <label htmlFor="email">Email<span className="required text-danger">*</span></label>
                        <input
                            type="email"
                            id="email"
                            placeholder='example@mail.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="comment">Comment<span className="required text-danger">*</span></label>
                        <textarea
                            id="comment"
                            placeholder="Enter your comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
                {showPopup && (
                    <div className="popup">
                        <p>Submitted successfully!</p>
                    </div>
                )}
            </div>
            <div className="contact-us-image">
                <img src={contactUs} alt="Contact Us" />
            </div>
        </div>
    );
};

export default ContactUs;
