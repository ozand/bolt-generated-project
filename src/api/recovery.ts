export const requestPasswordReset = async (email: string): Promise<void> => {
      const response = await fetch('/api/password/reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      })

      if (!response.ok) {
        throw new Error('Failed to request password reset')
      }
    }

    export const resetPassword = async (token: string, newPassword: string): Promise<void> => {
      const response = await fetch(`/api/password/reset/${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ newPassword })
      })

      if (!response.ok) {
        throw new Error('Failed to reset password')
      }
    }
