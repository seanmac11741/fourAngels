// fourangels/src/app/page.js
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center text-lg font-medium dark:text-gray-200">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-500">Four Angels</h1>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-blue-500 transition-colors dark:hover:text-blue-400">Home</a>
            <a href="#mission" className="hover:text-blue-500 transition-colors dark:hover:text-blue-400">Mission</a>
            <a href="#help" className="hover:text-blue-500 transition-colors dark:hover:text-blue-400">Help</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6 text-gray-800 dark:text-white">
          Empowering Lives Through Hope
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Four Angels is a non-profit organization dedicated to supporting underserved communities and creating opportunities for those in need.
        </p>
        <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors dark:bg-blue-700 dark:text-white dark:hover:text-gray-200">
          Get Involved
        </button>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <section id="mission" className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Our Mission</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Four Angels focuses on providing resources, education, and support to communities in need. We work to create a better future for everyone.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Our Impact</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We've made a real difference through our programs and initiatives, helping thousands of individuals each year.
            </p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="grid md:grid-cols-3 gap-12 py-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              "Four Angels has been a lifeline for our community. Their support has changed so many lives."
            </p>
            <p className="font-medium text-blue-500 dark:text-blue-400">Community Member</p>
          </div>
        </section>

        {/* CTA Section */}
        <section id="help" className="bg-blue-50 dark:bg-blue-900 p-16 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">How Can We Help?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Get involved by volunteering, donating, or spreading the word about our cause.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors dark:bg-blue-700 dark:text-white dark:hover:text-gray-200">
            Learn More
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 text-center text-gray-600 dark:text-gray-300">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-lg font-medium">Four Angels</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-500 transition-colors dark:hover:text-blue-400">Contact Us</a>
            <a href="#" className="hover:text-blue-500 transition-colors dark:hover:text-blue-400">Privacy Policy</a>
            <a href="#" className="hover:text-blue-500 transition-colors dark:hover:text-blue-400">Terms of Service</a>
          </div>
        </div>
        <div className="mt-8 md:mt-0 text-sm">
          <p>© 2023 Four Angels. All rights reserved.</p>
        </div>
      </footer>

      {/* Social Media Links and Contact Info */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Connect With Us</h2>
        <div className="max-w-md mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <a
              href="https://www.facebook.com/fourangelswy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Facebook
            </a>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <a
              href="https://venmo.com/u/janderson26"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Venmo
            </a>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-gray-600 dark:text-gray-300 mb-4">Email: jordan.anderson26@email.com</p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Phone: (307) 399-4344</p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Address: 302 S 2nd Street, Laramie, WY</p>
        </div>

        <button className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors dark:bg-blue-700 dark:text-white dark:hover:text-gray-200">
          Make a Donation
        </button>
      </section>
    </div>
  );
}