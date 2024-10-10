import { useNavigate } from 'react-router-dom'

const UserDashboard = () => {
  const navigate = useNavigate()

  const handleSignOut = () => {
    localStorage.removeItem('authToken')
    localStorage.removeItem('userType')
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">User Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-4">
              <h2 className="text-2xl font-semibold mb-4">Welcome to your dashboard</h2>
              <p className="mb-4">Here you can manage your lost and found items.</p>
              <div className="space-y-4">
                <button
                  onClick={() => navigate('/report')}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Report Lost Item
                </button>
                <button
                  onClick={() => navigate('/my-items')}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4"
                >
                  View My Items
                </button>
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

export default UserDashboard