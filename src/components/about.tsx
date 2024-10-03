import React from 'react'

function About  () {
  return (
    <div className="min-h-screen bg-yellow-100">
        <title>About Us - Hunger Hustle</title>
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Heading Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-red-600">
              Welcome to Hunger Hustle!
            </h1>
            <p className="text-lg mt-4 text-gray-800">
              Delicious food, fast service, and unbeatable taste!
            </p>
          </div>

          {/* About Content */}
          <div className="flex flex-wrap justify-center items-center">
            {/* Image Section */}
            <div className="w-full md:w-6/12 lg:w-4/12 px-4 mb-8">
              
            </div>

            {/* Text Section */}
            <div className="w-full md:w-6/12 lg:w-5/12 px-4 mb-8">
              <h2 className="text-3xl font-semibold text-red-600">
                Our Story
              </h2>
              <p className="mt-4 text-gray-700">
              Hunger Hustle started with a simple mission: to provide delicious, 
                high-quality fast food to everyone. From our signature burgers 
                to crispy fries, we bring you a taste of joy in every bite.
              </p>
              <p className="mt-4 text-gray-700">
                We believe in fast service without compromising on flavor. Our 
                team works around the clock to ensure that every order leaves 
                our kitchen with the same care and attention that  become 
                known for.
              </p>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-gray-800">Why Choose Us?</h3>
            <div className="mt-6 flex flex-wrap justify-center">
              <div className="w-full md:w-4/12 px-4">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h4 className="text-xl font-bold text-red-600">Fresh Ingredients</h4>
                  <p className="mt-2 text-gray-700">
                    We use only the freshest ingredients to craft our meals, ensuring 
                    every bite bursts with flavor.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-4/12 px-4">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h4 className="text-xl font-bold text-red-600">Fast Delivery</h4>
                  <p className="mt-2 text-gray-700">
                    Our lightning-fast service guarantees that your food will be at 
                    your doorstep in no time.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-4/12 px-4">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h4 className="text-xl font-bold text-red-600">Affordable Prices</h4>
                  <p className="mt-2 text-gray-700">
                    Great taste at a price that won’t break the bank. Enjoy premium fast 
                    food without the premium cost.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
