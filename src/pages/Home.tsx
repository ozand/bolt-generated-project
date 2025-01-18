import { useAuth } from '../context/AuthContext'

    export default function Home() {
      const { isAuthenticated } = useAuth()

      return (
        <div>
          <h1 className="text-3xl font-bold mb-4">Welcome to DevClone</h1>
          <p className="text-lg">
            {isAuthenticated
              ? 'Start exploring and writing posts!'
              : 'Join our community to start writing and reading posts'}
          </p>
        </div>
      )
    }
