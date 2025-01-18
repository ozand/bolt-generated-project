export const uploadAvatar = async (file: File): Promise<string> => {
  const formData = new FormData()
  formData.append('avatar', file)

  const response = await fetch('/api/profile/avatar', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    body: formData
  })

  if (!response.ok) {
    throw new Error('Failed to upload avatar')
  }

  const data = await response.json()
  return data.url
}

export const updateProfile = async (data: Partial<User> & { avatarFile?: File }): Promise<User> => {
  if (data.avatarFile) {
    const avatarUrl = await uploadAvatar(data.avatarFile)
    data.avatar = avatarUrl
    delete data.avatarFile
  }

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
