import * as React from 'react'
    import { cn } from '@/lib/utils'

    export interface ToastProps {
      variant?: 'default' | 'destructive'
      title?: string
      description?: string
      duration?: number
    }

    export function Toast({ variant = 'default', title, description }: ToastProps) {
      return (
        <div
          className={cn(
            'bg-background border rounded-md shadow-lg p-4 min-w-[300px]',
            variant === 'destructive' && 'bg-red-100 border-red-200'
          )}
        >
          {title && <div className="font-medium">{title}</div>}
          {description && <div className="text-sm mt-1">{description}</div>}
        </div>
      )
    }
