interface ValidationResult {
      isValid: boolean
      errors: Record<string, string>
    }

    export const validateRegisterForm = (data: {
      email: string
      password: string
      username: string
    }): ValidationResult => {
      const errors: Record<string, string> = {}

      if (!data.email) {
        errors.email = 'Email is required'
      } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = 'Email address is invalid'
      }

      if (!data.password) {
        errors.password = 'Password is required'
      } else if (data.password.length < 8) {
        errors.password = 'Password must be at least 8 characters'
      }

      if (!data.username) {
        errors.username = 'Username is required'
      } else if (data.username.length < 3) {
        errors.username = 'Username must be at least 3 characters'
      }

      return {
        isValid: Object.keys(errors).length === 0,
        errors,
      }
    }

    export const validateLoginForm = (data: {
      email: string
      password: string
    }): ValidationResult => {
      const errors: Record<string, string> = {}

      if (!data.email) {
        errors.email = 'Email is required'
      }

      if (!data.password) {
        errors.password = 'Password is required'
      }

      return {
        isValid: Object.keys(errors).length === 0,
        errors,
      }
    }
