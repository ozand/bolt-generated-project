import React from 'react'
    import ReactDOM from 'react-dom/client'
    import { BrowserRouter, Routes, Route } from 'react-router-dom'
    import { AuthProvider } from './context/AuthContext'
    import { ToastProvider } from './components/ui/toast-provider'
    import App from './App'
    import Login from './pages/Login'
    import Register from './pages/Register'
    import Profile from './pages/Profile'
    import Settings from './pages/Settings'
    import ProtectedRoute from './components/ProtectedRoute'
    import './index.css'

    ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
        <BrowserRouter>
          <AuthProvider>
            <ToastProvider>
              <Routes>
                <Route path="/" element={<App />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route element={<ProtectedRoute />}>
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/settings" element={<Settings />} />
                </Route>
              </Routes>
            </ToastProvider>
          </AuthProvider>
        </BrowserRouter>
      </React.StrictMode>
    )
