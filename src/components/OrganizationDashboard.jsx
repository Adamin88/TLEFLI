import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const OrganizationDashboard = () => {
  const navigate = useNavigate()
  const [items, setItems] = useState([
    { id: 1, description: 'Black Wallet', location: 'Bus 42', date: '2023-05-20' },
    { id: 2, description: 'Blue Umbrella', location: 'Train Station', date: '2023-05-21' },
  ])

  const handleSignOut = () => {
    localStorage.removeItem('authToken')
    localStorage.removeItem('userType')
    navigate('/')
  }

  const handleAddItem = () => {
    const newItem = {
      id: items.length + 1,
      description: 'New Item',
      location: 'Location',
      date: new Date().toISOString().split('T')[0],
    }
    setItems([...items, newItem])
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Organization Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg p-4">
              <h2 className="text-2xl font-semibold mb-4">Manage Lost and Found Items</h2>
              <button
                onClick={handleAddItem}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4"
              >
                Add New Item
              </button>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Description
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Location
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {items.map((item) => (
                      <tr key={item.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.description}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.location}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <button
          onClick={handleSignOut}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign Out
        </button>
      </div>
    </div>
  )
}

export default OrganizationDashboard