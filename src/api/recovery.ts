const requestCache = new Map<string, number>()

export const requestPasswordReset = async (email: string): Promise<void> => {
  const lastRequest = requestCache.get(email)
  const now = Date.now()
  
  if (lastRequest && now - lastRequest < 60000) {
    throw new Error('Please wait 1 minute before requesting another reset')
  }

  requestCache.set(email, now)

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
