import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
    import { useNavigate } from 'react-router-dom'

    interface User {
      id: string
      email: string
      username: string
      avatar?: string
    }

    interface AuthContextType {
      user: User | null
      login: (email: string, password: string) => Promise<void>
      register: (email: string, password: string, username: string) => Promise<void>
      logout: () => void
      isAuthenticated: boolean
    }

    const AuthContext = createContext<AuthContextType>({
      user: null,
      login: async () => {},
      register: async () => {},
      logout: () => {},
      isAuthenticated: false
    })

    export function AuthProvider({ children }: { children: ReactNode }) {
      const [user, setUser] = useState<User | null>(null)
      const navigate = useNavigate()

      useEffect(() => {
        const storedUser = localStorage.getItem('user')
        if (storedUser) {
          try {
            setUser(JSON.parse(storedUser))
          } catch (error) {
            console.error('Failed to parse user data:', error)
            localStorage.removeItem('user')
          }
        }
      }, [])

      const login = async (email: string, password: string) => {
        try {
          const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
          })
          
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
          }

          const data = await response.json()
          setUser(data.user)
          localStorage.setItem('user', JSON.stringify(data.user))
          localStorage.setItem('token', data.token)
          navigate('/')
        } catch (error) {
          console.error('Login error:', error)
          throw error
        }
      }

      const register = async (email: string, password: string, username: string) => {
        try {
          const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, username })
          })

          console.log('Registration response:', response)

          if (!response.ok) {
            const errorText = await response.text()
            console.error('Registration failed:', errorText)
            throw new Error(errorText || 'Registration failed')
          }

          const data = await response.json()
          console.log('Registration data:', data)
          
          setUser(data.user)
          localStorage.setItem('user', JSON.stringify(data.user))
          localStorage.setItem('token', data.token)
          navigate('/')
        } catch (error) {
          console.error('Registration error:', error)
          throw error
        }
      }

      const logout = () => {
        setUser(null)
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        navigate('/login')
      }

      const value = {
        user,
        login,
        register,
        logout,
        isAuthenticated: !!user
      }

      return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    }

    export function useAuth() {
      const context = useContext(AuthContext)
      if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
      }
      return context
    }
