import { register, login, getCurrentUser } from './auth'
    import type {
      RegisterPayload,
      LoginPayload,
      AuthResponse,
      User
    } from './auth'

    export type { RegisterPayload, LoginPayload, AuthResponse, User }

    const API = {
      auth: {
        register,
        login,
        getCurrentUser
      }
    }

    export default API
