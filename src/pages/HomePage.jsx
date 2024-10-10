import { Link } from 'react-router-dom'
import { Search, MapPin, Bell } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to TLEFLI</h1>
          <p className="text-xl mb-8">Find what's lost, return what's found</p>
          <Link to="/report" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
            Report an Item
          </Link>
        </div>
      </header>

      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Report</h3>
              <p>Quickly report lost or found items with detailed descriptions and photos.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Match</h3>
              <p>Our advanced algorithm searches for potential matches in the area.</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Bell className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reunite</h3>
              <p>Get notified when a match is found and arrange for item return.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Recent Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Lost Wallet Returned</h3>
                <p className="text-gray-600 mb-4">
                  "I lost my wallet at the park and thanks to TLEFLI, it was returned to me within 24 hours!"
                </p>
                <p className="text-sm text-gray-500">- John D.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
          <Link to="/report" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
            Report an Item Now
          </Link>
        </div>
      </section>
    </div>
  )
}