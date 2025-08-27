import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ContactForm } from '../types';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.2);
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactForm]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactForm> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSending(true);
      // Replace with your EmailJS Service ID, Template ID, and User ID
      const serviceId = 'YOUR_SERVICE_ID'; // e.g., 'service_abc123'
      const templateId = 'YOUR_TEMPLATE_ID'; // e.g., 'template_xyz789'
      const userId = 'YOUR_USER_ID'; // e.g., 'user_123456789'

      emailjs.send(serviceId, templateId, {
        name: formData.name,
        email: formData.email,
        message: formData.message
      }, userId)
        .then(() => {
          setIsSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
        })
        .catch((error) => {
          console.error('EmailJS error:', error);
          setErrors({ message: 'Failed to send message. Please try again later.' });
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/sujnankumar', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/sujnankumar', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/sujnankumar', label: 'Twitter' }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-800 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Let's discuss your next project or opportunity. I'm always excited to work on innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            <h3 className="text-2xl font-bold font-poppins text-gray-800 dark:text-white mb-8">
              Contact Information
            </h3>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4 group">
                <div className="bg-accent/10 p-3 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                  <Mail className="text-accent" size={24} />
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Email</p>
                  <p className="text-gray-800 dark:text-white font-semibold">sujnankumar439@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="bg-accent/10 p-3 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                  <Phone className="text-accent" size={24} />
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Phone</p>
                  <p className="text-gray-800 dark:text-white font-semibold">+91 78990 69448</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="bg-accent/10 p-3 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                  <MapPin className="text-accent" size={24} />
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Location</p>
                  <p className="text-gray-800 dark:text-white font-semibold">Beltangadi, Dakshina Kannada, Karnataka, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mb-12">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 dark:bg-gray-700 hover:bg-accent hover:text-white p-3 rounded-lg transition-all duration-300 hover:scale-110 hover:rotate-6 group"
                    aria-label={label}
                  >
                    <Icon size={24} className="group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="map-container bg-gray-200 dark:bg-gray-700 rounded-lg h-64 flex items-center justify-center overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2173872/pexels-photo-2173872.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Map"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="mx-auto text-green-500 mb-6" size={64} />
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-accent hover:text-primary font-semibold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white dark:bg-gray-800 text-gray-800 dark:text-white transition-all duration-300 ${
                        errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white dark:bg-gray-800 text-gray-800 dark:text-white transition-all duration-300 ${
                        errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white dark:bg-gray-800 text-gray-800 dark:text-white transition-all duration-300 resize-none ${
                        errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="Tell me about your project or just say hello..."
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className={`w-full bg-accent hover:bg-accent/90 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                      isSending ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    <Send size={20} />
                    {isSending ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;