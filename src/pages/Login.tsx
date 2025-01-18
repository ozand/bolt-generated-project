import { useState } from 'react'
    import { useAuth } from '../context/AuthContext'
    import { Link, useNavigate } from 'react-router-dom'
    import { Button } from '@/components/ui/button'
    import { Input } from '@/components/ui/input'
    import { Label } from '@/components/ui/label'

    export default function Login() {
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [error, setError] = useState('')
      const { login } = useAuth()
      const navigate = useNavigate()

      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
          await login(email, password)
          navigate('/')
        } catch (err) {
          setError(err instanceof Error ? err.message : 'Login failed')
        }
      }

      return (
        <div className="max-w-md mx-auto mt-20">
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <form onSubmit={handleSubmit} className="space-y-4">
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
              Login
            </Button>
          </form>
          <div className="mt-4 text-center">
            Don't have an account?{' '}
            <Link to="/register" className="text-primary hover:underline">
              Register
            </Link>
          </div>
        </div>
      )
    }
