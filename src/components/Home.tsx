import "../styles/Home.css";
import Testimonials from "./Testimonials";
import ContactForm from "./ContactForm";
import logo from "../assets/scottys.png";
import front from "../assets/scottys-door.png";

const Home = () => {
  return (
    <div className="home-container">
      <div className="landing-wrapper">
        <img src={front} alt="Front of shop" className="front-img" />
        <h1>Kenora's Most Trusted Automotive Shop</h1>
      </div>
      <main>
        <div className="contactForm-wrapper">
          <ContactForm />
        </div>

        <div className="testimonials-wrapper">
          <Testimonials />
        </div>
				</main>
      <footer>
        <p>&copy; 2023 Scotty's Auto Service</p>
        <p>345 2nd St S, Kenora, ON</p>
        <p>Phone: +1 (807) 548-1398</p>

      </footer>
    </div>
  );
};

export default Home;
