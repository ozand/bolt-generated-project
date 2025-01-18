export interface ApiError {
  status: number
  message: string
  details?: Record<string, string>
}

export interface User {
  id: string
  email: string
  username: string
  avatar?: string
}
