import { useState } from 'react'
    import { useAuth } from '../context/AuthContext'
    import { Link, useNavigate } from 'react-router-dom'
    import { Button } from '@/components/ui/button'
    import { Input } from '@/components/ui/input'
    import { Label } from '@/components/ui/label'

    export default function Register() {
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [username, setUsername] = useState('')
      const [error, setError] = useState('')
      const { register } = useAuth()
      const navigate = useNavigate()

      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        try {
          await register(email, password, username)
          navigate('/')
        } catch (err) {
          setError(err instanceof Error ? err.message : 'Registration failed')
        }
      }

      return (
        <div className="max-w-md mx-auto mt-20">
          <h1 className="text-2xl font-bold mb-4">Register</h1>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Register
            </Button>
          </form>
          <div className="mt-4 text-center">
            Already have an account?{' '}
            <Link to="/login" className="text-primary hover:underline">
              Login
            </Link>
          </div>
        </div>
      )
    }
