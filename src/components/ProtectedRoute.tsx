import { useAuth } from '../context/AuthContext'
    import { Navigate, Outlet } from 'react-router-dom'

    export default function ProtectedRoute() {
      const { isAuthenticated } = useAuth()
      
      if (isAuthenticated === null) {
        return null // or loading spinner
      }

      return isAuthenticated ? <Outlet /> : <Navigate to="/" />
    }
