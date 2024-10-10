import { Users, BarChart, Globe } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">About TLEFLI</h1>
          <p className="text-xl">Connecting lost items with their rightful owners</p>
        </div>
      </header>

      <section className="py-16">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-8">
              At TLEFLI, our mission is to create a global community that helps people recover their lost items and return found items to their rightful owners. We believe in the power of technology and human kindness to make the world a little bit better, one lost item at a time.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose TLEFLI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community-Driven</h3>
              <p className="text-gray-600">Join a network of people committed to helping each other recover lost items.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Matching</h3>
              <p className="text-gray-600">Our sophisticated algorithm increases the chances of finding your lost items.</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600">Connect with people and businesses worldwide to recover your items.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6">
              TLEFLI was born out of a personal experience. Our founder lost a cherished family heirloom during a trip and realized how difficult and frustrating it can be to recover lost items. This experience inspired the creation of a platform that leverages technology and community to simplify the process of reuniting people with their lost possessions.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Since our launch, we've helped thousands of people recover their lost items and have partnered with businesses across various industries to create a comprehensive lost and found network.
            </p>
            <p className="text-lg text-gray-700">
              We're committed to continually improving our platform and expanding our reach to help more people around the world. Join us in our mission to make lost and found easier, more efficient, and more successful for everyone.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Join the TLEFLI Community Today</h2>
          <a href="#" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
            Get Started
          </a>
        </div>
      </section>
    </div>
  )
}