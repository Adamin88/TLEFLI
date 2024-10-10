import { useState } from 'react'
import { CreditCard, Building, Search, DollarSign } from 'lucide-react'

const OrganizationSubscription = () => {
  const [organizations, setOrganizations] = useState([])
  const [newOrg, setNewOrg] = useState({ name: '', type: '', subscriptionType: 'monthly' })
  const [lostItem, setLostItem] = useState({ description: '', location: '', date: '' })
  const [matchedItem, setMatchedItem] = useState(null)
  const [showPayment, setShowPayment] = useState(false)

  const handleOrgSubmit = (e) => {
    e.preventDefault()
    setOrganizations([...organizations, { ...newOrg, id: Date.now() }])
    setNewOrg({ name: '', type: '', subscriptionType: 'monthly' })
  }

  const handleLostItemSubmit = (e) => {
    e.preventDefault()
    // Simulate matching process
    const isMatch = Math.random() > 0.5
    if (isMatch) {
      setMatchedItem({
        ...lostItem,
        organization: organizations[Math.floor(Math.random() * organizations.length)].name
      })
      setShowPayment(true)
    } else {
      alert('No match found. We\'ll keep searching and notify you if we find anything.')
    }
    setLostItem({ description: '', location: '', date: '' })
  }

  const handlePayment = () => {
    alert('Payment of $2 processed successfully. You can now claim your item!')
    setMatchedItem(null)
    setShowPayment(false)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">TLEFLI Organization Subscription</h1>

      {/* Organization Subscription Form */}
      <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Subscribe Your Organization</h2>
        <form onSubmit={handleOrgSubmit} className="space-y-4">
          <div>
            <label htmlFor="orgName" className="block text-sm font-medium text-gray-700">Organization Name</label>
            <input
              type="text"
              id="orgName"
              value={newOrg.name}
              onChange={(e) => setNewOrg({...newOrg, name: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="orgType" className="block text-sm font-medium text-gray-700">Organization Type</label>
            <select
              id="orgType"
              value={newOrg.type}
              onChange={(e) => setNewOrg({...newOrg, type: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            >
              <option value="">Select type</option>
              <option value="bus_station">Bus Station</option>
              <option value="train_station">Train Station</option>
              <option value="airport">Airport</option>
              <option value="hotel">Hotel</option>
            </select>
          </div>
          <div>
            <label htmlFor="subscriptionType" className="block text-sm font-medium text-gray-700">Subscription Type</label>
            <select
              id="subscriptionType"
              value={newOrg.subscriptionType}
              onChange={(e) => setNewOrg({...newOrg, subscriptionType: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="monthly">Monthly ($50/month)</option>
              <option value="yearly">Yearly ($500/year)</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Subscribe
          </button>
        </form>
      </div>

      {/* List of Subscribed Organizations */}
      <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Subscribed Organizations</h2>
        {organizations.length === 0 ? (
          <p>No organizations subscribed yet.</p>
        ) : (
          <ul className="space-y-2">
            {organizations.map((org) => (
              <li key={org.id} className="flex items-center space-x-2">
                <Building className="text-blue-500" />
                <span>{org.name} - {org.type} ({org.subscriptionType} subscription)</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Lost Item Declaration Form */}
      <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Declare a Lost Item</h2>
        <form onSubmit={handleLostItemSubmit} className="space-y-4">
          <div>
            <label htmlFor="itemDescription" className="block text-sm font-medium text-gray-700">Item Description</label>
            <input
              type="text"
              id="itemDescription"
              value={lostItem.description}
              onChange={(e) => setLostItem({...lostItem, description: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="itemLocation" className="block text-sm font-medium text-gray-700">Last Seen Location</label>
            <input
              type="text"
              id="itemLocation"
              value={lostItem.location}
              onChange={(e) => setLostItem({...lostItem, location: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="itemDate" className="block text-sm font-medium text-gray-700">Date Lost</label>
            <input
              type="date"
              id="itemDate"
              value={lostItem.date}
              onChange={(e) => setLostItem({...lostItem, date: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          <button type="submit" className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Search for Item
          </button>
        </form>
      </div>

      {/* Matched Item and Payment */}
      {matchedItem && (
        <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Item Matched!</h2>
          <p>Your item ({matchedItem.description}) has been found at {matchedItem.organization}.</p>
          {showPayment && (
            <div className="mt-4">
              <p className="mb-2">To claim your item, please pay the $2 TLEFLI fee:</p>
              <button onClick={handlePayment} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded flex items-center">
                <DollarSign className="mr-2" />
                Pay $2 and Claim Item
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default OrganizationSubscription