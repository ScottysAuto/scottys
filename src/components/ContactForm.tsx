import { useState } from 'react';
import "../styles/ContactForm.css";

function ContactForm() {
const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [phone, setPhone] = useState('');
  
	const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = {
      name,
      email,
			phone,
      message,
    };
    try {
      const response = await fetch('https://formspree.io/f/xgegpjje', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormStatus('success');
        setName('');
        setEmail('');
				setPhone('');
        setMessage('');
      } else {
				setFormStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
    }
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      {formStatus === 'success' && <p className="success-message">Form submitted successfully!</p>}
      {formStatus === 'error' && <p className="error-message">There was an error submitting the form. Please try again later.</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
				<input 
				  type="text"
					placeholder="Your Phone Number"
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
					required
				/>
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;




