//protected route for authenticated access.
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children, allowedUserType }) => {
  const authToken = localStorage.getItem('authToken')
  const userType = localStorage.getItem('userType')

  if (!authToken || userType !== allowedUserType) {
    return <Navigate to="/" replace />
  }

  return children
}

export default ProtectedRoute