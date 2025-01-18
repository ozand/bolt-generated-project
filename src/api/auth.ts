const API_BASE_URL = '/api'

    interface RegisterPayload {
      email: string
      password: string
      username: string
    }

    interface LoginPayload {
      email: string
      password: string
    }

    interface AuthResponse {
      user: {
        id: string
        email: string
        username: string
        avatar?: string
      }
      token: string
    }

    export const register = async (payload: RegisterPayload): Promise<AuthResponse> => {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || 'Registration failed')
      }

      return response.json()
    }

    export const login = async (payload: LoginPayload): Promise<AuthResponse> => {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || 'Login failed')
      }

      return response.json()
    }

    export const getCurrentUser = async (): Promise<AuthResponse['user']> => {
      const response = await fetch(`${API_BASE_URL}/auth/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })

      if (!response.ok) {
        throw new Error('Failed to fetch user data')
      }

      return response.json()
    }
