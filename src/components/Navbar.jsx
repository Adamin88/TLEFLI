import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, User, Building, LogOut,} from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userType, setUserType] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const authToken = localStorage.getItem('authToken')
    const storedUserType = localStorage.getItem('userType')
    if (authToken && storedUserType) {
      setIsLoggedIn(true)
      setUserType(storedUserType)
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleSignOut = () => {
    localStorage.removeItem('authToken')
    localStorage.removeItem('userType')
    setIsLoggedIn(false)
    setUserType(null)
    navigate('/')
  }

  return (
    <nav className="mb-0 bg-gradient-to-r from-neutral-200 to-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-around h-10">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img className="h-10 w-auto" src="/search-circle.svg" alt="TLEFLI Logo" />
              <span className=" text-xl font-bold text-gray-800"><span className='text-yellow-600'>T</span>LEFLI</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Home
              </Link>
              <Link to="/report" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Report Item
              </Link>
              <Link to="/my-items" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Mes Objets
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="ml-3 relative">
              <div className="flex space-x-4">
                {isLoggedIn ? (
                  <>
                    <span className="text-gray-500 px-3 py-2 rounded-md text-sm font-medium">
                      {userType === 'user' ? (
                        <User className="inline-block w-5 h-5 mr-1" />
                      ) : (
                        <Building className="inline-block w-5 h-5 mr-1" />
                      )}
                      {userType === 'user' ? 'User' : 'Organization'}
                    </span>
                    <button
                      onClick={handleSignOut}
                      className="text-gray-500 hover:bg-gray-100 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      <LogOut className="inline-block w-5 h-5 mr-1" />
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    {/* Dropdown for User */}
                    <div className="relative group">
                      <button className="text-gray-500 hover:bg-gray-100 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                        <User className="inline-block w-5 h-5 mr-1" />
                        User
                      </button>
                      <div className="absolute left-0 mt-0 w-40 hidden group-hover:block bg-white shadow-lg rounded-md z-20">
                        <Link
                          to="/user-signin"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Sign In
                        </Link>
                        <Link
                          to="/user-signup"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Sign Up
                        </Link>
                      </div>
                    </div>

                    {/* Dropdown for Organization */}
                    <div className="relative group">
                      <button className="text-gray-500 hover:bg-gray-100 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                        <Building className="inline-block w-5 h-5 mr-1" />
                        Organization
                      </button>
                      <div className=" absolute left-0 mt-0 w-40 hidden group-hover:block focus-within:block bg-white shadow-lg rounded-md z-20">
                        <Link
                          to="/org-signin"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Sign In
                        </Link>
                        <Link
                          to="/org-signup"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Sign Up
                        </Link>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/report"
              className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
              onClick={toggleMenu}
            >
              Report Item
            </Link>
            <Link
              to="/my-items"
              className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
              onClick={toggleMenu}
            >
              Mes Objets
            </Link>
            {isLoggedIn ? (
              <button
                onClick={() => {
                  handleSignOut()
                  toggleMenu()
                }}
                className="block w-full text-left pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
              >
                Sign Out ({userType === 'user' ? 'User' : 'Organization'})
              </button>
            ) : (
              <>
                <Link
                  to="/user-signin"
                  className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                  onClick={toggleMenu}
                >
                  User Sign In
                </Link>
                <Link
                  to="/org-signin"
                  className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                  onClick={toggleMenu}
                >
                  Organization Sign In
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
