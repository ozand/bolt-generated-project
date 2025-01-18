import { useToast } from '@/components/ui/toast-provider'

    export const handleApiError = (error: unknown) => {
      const { toast } = useToast()
      
      const message = error instanceof Error 
        ? error.message 
        : 'An unexpected error occurred'

      toast({
        variant: 'destructive',
        title: 'Error',
        description: message,
      })
    }

    export const withErrorHandling = async <T>(
      fn: () => Promise<T>,
      onError?: (error: Error) => void
    ): Promise<T | void> => {
      try {
        return await fn()
      } catch (error) {
        const err = error instanceof Error ? error : new Error(String(error))
        handleApiError(err)
        onError?.(err)
      }
    }
