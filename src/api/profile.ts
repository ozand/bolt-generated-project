import { User } from './auth'
    import { withErrorHandling } from '../utils/errorHandler'

    export const updateProfile = async (data: Partial<User>): Promise<User> => {
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(data)
      })

      if (!response.ok) {
        throw new Error('Failed to update profile')
      }

      return response.json()
    }

    export const useUpdateProfile = () => {
      const update = async (data: Partial<User>) => {
        return withErrorHandling(() => updateProfile(data))
      }

      return { update }
    }
