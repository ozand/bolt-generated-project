import { ApiError } from './types'

interface AuthResponse {
  user: {
    id: string
    email: string
    username: string
    avatar?: string
  }
  token: string
}

interface RegisterPayload {
  email: string
  password: string
  username: string
}

interface LoginPayload {
  email: string
  password: string
}

const handleApiError = async (response: Response): Promise<ApiError> => {
  try {
    const errorData = await response.json()
    return {
      status: response.status,
      message: errorData.message || 'An error occurred',
      details: errorData.details
    }
  } catch {
    return {
      status: response.status,
      message: 'An unexpected error occurred'
    }
  }
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
    const error = await handleApiError(response)
    throw error
  }

  return response.json()
}

// ... rest of auth.ts remains the same
