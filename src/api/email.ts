export const sendVerificationEmail = async (): Promise<void> => {
      const response = await fetch('/api/email/verify', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })

      if (!response.ok) {
        throw new Error('Failed to send verification email')
      }
    }

    export const verifyEmail = async (token: string): Promise<void> => {
      const response = await fetch(`/api/email/verify/${token}`, {
        method: 'POST'
      })

      if (!response.ok) {
        throw new Error('Failed to verify email')
      }
    }
