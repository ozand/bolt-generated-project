import * as React from 'react'
    import { Toast, ToastProps } from './toast'

    interface ToastContextType {
      toast: (props: ToastProps) => void
    }

    const ToastContext = React.createContext<ToastContextType>({
      toast: () => {}
    })

    export function ToastProvider({ children }: { children: React.ReactNode }) {
      const [toasts, setToasts] = React.useState<ToastProps[]>([])

      const toast = (props: ToastProps) => {
        setToasts((current) => [...current, props])
        setTimeout(() => {
          setToasts((current) => current.slice(1))
        }, 5000)
      }

      return (
        <ToastContext.Provider value={{ toast }}>
          {children}
          <div className="fixed bottom-4 right-4 space-y-2">
            {toasts.map((toast, index) => (
              <Toast key={index} {...toast} />
            ))}
          </div>
        </ToastContext.Provider>
      )
    }

    export function useToast() {
      return React.useContext(ToastContext)
    }
