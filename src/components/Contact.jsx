import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, EMAIL_JS_PUBLIC_KEY } from "../constants";
import Footer from "./Footer";
import { motion } from 'framer-motion';

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});


	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { target } = e;
		const { name, value } = target;

		setForm({
			...form,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		// cleaning the form data
		const username = form.name.trim();
		const user_email = form.email.trim();
		const user_message = form.message.trim();

		if (username === '' || user_email === '' || user_message === '') {
			setLoading(false);
			toast.error("Please fill all the fields.", {
				position: 'bottom-right',
			});
			return;
		}
		console.log(username,user_email,user_message)

		emailjs
			.send(
				EMAIL_JS_SERVICE_ID,
				EMAIL_JS_TEMPLATE_ID,
				{
					from_name: username,
					to_name: "Mukul Meena",
					reply_to: user_email,
					to_email: "meenamukul12@gmail.com",
					message: user_message,
				},
				EMAIL_JS_PUBLIC_KEY
			)
			.then(
				() => {
					setLoading(false);
					toast.success("Message sent successfully!", {
						position: 'bottom-right',
					});
					setForm({
						name: "",
						email: "",
						message: "",
					});
				},
				(error) => {
					setLoading(false);
					console.error(error);
					toast.error("Uh, oh! Something went wrong. Please try again later.", {
						position: 'bottom-right',
					});
				}
			);
	};

	return (
		<div className='relative z-0 bg-black min-h-screen w-full pt-20 pb-16'>
			<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.h2
					initial={{ y: -50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="text-4xl sm:text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500"
				>
					Get in Touch
				</motion.h2>
				<div className='bg-gray-900 rounded-lg shadow-xl p-8'>
					<p className='text-gray-300 mb-8 text-center'>Have a question or want to work together?</p>
					<form
						ref={formRef}
						onSubmit={handleSubmit}
						className='flex flex-col gap-6'
					>
						<div className='flex flex-col sm:flex-row gap-6'>
							<div className='flex-1'>
								<label htmlFor='name' className='block text-sm font-medium text-gray-300 mb-2'>Your Name</label>
								<input
									type='text'
									id='name'
									name='name'
									value={form.name}
									onChange={handleChange}
									placeholder="John Doe"
									className='w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500'
									required
								/>
							</div>
							<div className='flex-1'>
								<label htmlFor='email' className='block text-sm font-medium text-gray-300 mb-2'>Your Email</label>
								<input
									type='email'
									id='email'
									name='email'
									value={form.email}
									onChange={handleChange}
									placeholder="john@example.com"
									className='w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500'
									required
								/>
							</div>
						</div>
						<div>
							<label htmlFor='message' className='block text-sm font-medium text-gray-300 mb-2'>Your Message</label>
							<textarea
								id='message'
								name='message'
								rows={5}
								value={form.message}
								onChange={handleChange}
								placeholder='Your message here...'
								className='w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500'
								required
							/>
						</div>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							type='submit'
							className='px-6 py-3 bg-gradient-to-r from-yellow-400 to-pink-500 text-white font-bold rounded-md shadow-lg hover:from-yellow-500 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50'
						>
							{loading ? "Sending..." : "Send Message"}
						</motion.button>
					</form>
				</div>
			</div>
			<ToastContainer />
			<Footer />
		</div>
	);
};

export default Contact;

