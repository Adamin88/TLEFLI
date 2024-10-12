import { Eye, Trash2 } from 'lucide-react'

const mockItems = [
  {
    id: '1',
    type: 'lost',
    category: 'Electronics',
    description: 'Black iPhone 12 Pro',
    date: '2023-05-15',
    location: 'Central Park',
    status: 'pending',
  },
  {
    id: '2',
    type: 'found',
    category: 'Accessories',
    description: 'Gold watch',
    date: '2023-05-16',
    location: 'Main Street Cafe',
    status: 'matched',
  },
  {
    id: '3',
    type: 'lost',
    category: 'Documents',
    description: 'Passport',
    date: '2023-05-14',
    location: 'Airport',
    status: 'resolved',
  },
]

export default function MyItemsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Mes Objets</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Type
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Category
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Description
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Date
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Location
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Status
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {mockItems.map((item) => (
              <tr key={item.id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <span className={`relative inline-block px-3 py-1 font-semibold ${item.type === 'lost' ? 'text-red-900' : 'text-green-900'} leading-tight`}>
                    <span aria-hidden className={`absolute inset-0 ${item.type === 'lost' ? 'bg-red-200' : 'bg-green-200'} opacity-50 rounded-full`}></span>
                    <span className="relative">{item.type === 'lost' ? 'Lost' : 'Found'}</span>
                  </span>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{item.category}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{item.description}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{item.date}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{item.location}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <span className={`relative inline-block px-3 py-1 font-semibold leading-tight ${
                    item.status === 'pending' ? 'text-orange-900' :
                    item.status === 'matched' ? 'text-blue-900' : 'text-green-900'
                  }`}>
                    <span aria-hidden className={`absolute inset-0 opacity-50 rounded-full ${
                      item.status === 'pending' ? 'bg-orange-200' :
                      item.status === 'matched' ? 'bg-blue-200' : 'bg-green-200'
                    }`}></span>
                    <span className="relative capitalize">{item.status}</span>
                  </span>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-900">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}