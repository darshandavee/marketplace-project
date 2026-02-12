import { useState } from 'react';
import './ContactUs.css';
 
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    ordernumber: '',
    message: ''
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
 
     // Resetting the form
    setFormData({
      name: '',
      email: '',
      ordernumber: '',
      message: ''
    });
  };
 
  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
          />
        </div>
 
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your.email@example.com"
          />
        </div>
 
        <div className="form-group">
          <label htmlFor="ordernumber">Order No. *</label>
          <input
            type="text"
            id="ordernumber"
            name="ordernumber"
            value={formData.ordernumber}
            onChange={handleChange}
            required
            placeholder="Your order number"
          />
        </div>
 
        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            placeholder="Tell us more about your enquiry..."
          />
        </div>
 
        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </div>
  );
}
 
export default ContactForm;
