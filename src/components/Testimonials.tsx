import "../styles/Testimonials.css";

const testimonialsData = [
	{
		id: 1,
		name: "Jim reeves",
		message: "Scotty does great work. There are few auto shops that are as honest as this one. I have been taking my cars to Scotty for over 10 years and have never been disappointed. Even better that he's right down town now.",
	},
	{
		id: 2,
		name: "Tammy Taylor",
		message: "Scotty is the best! He is honest, reliable, and does great work.  I highly recommend him to anyone looking for a great mechanic.",
	},
	{
		id: 3,
		name: "Brady Hawkins",
		message: "This shop is great. Scotty helped me out when I was in a pickle. He was able to get me in and out quickly and the price was very reasonable. I will definitely be going back to him for repairs.",
	},
];

const Testimonials = () => {
	return (
		<div className="testimonials">
			{testimonialsData.map((testimonial) => (
				<span
					key={testimonial.id}
					className="testimonial"
				>
					<p>{testimonial.message}</p>
					<p>- {testimonial.name}</p>
				</span>
			))}
		</div>
	);
}

export default Testimonials;
