import React from 'react'

function Contact ()  {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      
        <title>Contact Us</title>
      

      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
          <p className="mt-4 text-gray-600">We love to hear from you!</p>
        </div>

        <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2.5 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2.5 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2.5 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Your message..."
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-indigo-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact