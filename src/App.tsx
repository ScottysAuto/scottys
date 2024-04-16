import './styles/App.css'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import logo from './assets/scottys.png'
import front from './assets/scottys-door.png'

function App() {

  return (

<div className="app">
      <header>
			<img src={logo} alt="Logo" className='logo'/>
			<h1>Kenora's most trusted auto service</h1>
			</header>
			<img src={front} alt="Front of shop" className='front'/>
      <main>
<div className="testimonials">
			<Testimonials />
			</div>
      <div className='contact-form'>
			<ContactForm />
			</div>
      </main>
      <footer>
        <p>&copy; 2023 Scotty's Auto Service</p>
				<p>123 Main St. Kenora, ON</p>
				<p>Phone: +1 (807) 548-1398</p>

				<button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
				Customer Portal</button>
				</footer>
    </div>
	)
}

export default App
