interface ChangePasswordPayload {
      currentPassword: string
      newPassword: string
    }

    export const changePassword = async (data: ChangePasswordPayload): Promise<void> => {
      const response = await fetch('/api/password', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(data)
      })

      if (!response.ok) {
        throw new Error('Failed to change password')
      }
    }

    export const useChangePassword = () => {
      const change = async (data: ChangePasswordPayload) => {
        return withErrorHandling(() => changePassword(data))
      }

      return { change }
    }
