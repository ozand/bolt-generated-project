interface PasswordValidation {
  isValid: boolean
  errors: {
    currentPassword?: string
    newPassword?: string
    confirmPassword?: string
  }
}

const validatePassword = (data: {
  currentPassword: string
  newPassword: string
  confirmPassword: string
}): PasswordValidation => {
  const errors: Record<string, string> = {}

  if (!data.currentPassword) {
    errors.currentPassword = 'Current password is required'
  }

  if (!data.newPassword) {
    errors.newPassword = 'New password is required'
  } else if (data.newPassword.length < 8) {
    errors.newPassword = 'Password must be at least 8 characters'
  } else if (!/[A-Z]/.test(data.newPassword)) {
    errors.newPassword = 'Password must contain at least one uppercase letter'
  } else if (!/[0-9]/.test(data.newPassword)) {
    errors.newPassword = 'Password must contain at least one number'
  }

  if (data.newPassword !== data.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

export const changePassword = async (data: ChangePasswordPayload): Promise<void> => {
  const validation = validatePassword({
    currentPassword: data.currentPassword,
    newPassword: data.newPassword,
    confirmPassword: data.confirmPassword
  })

  if (!validation.isValid) {
    throw new Error(JSON.stringify(validation.errors))
  }

  // ... rest of changePassword implementation
}
