import type { ToastOptions } from 'react-toastify'
import { toast } from 'react-toastify'

// type
import type ToastOptionsType from '@/types/toastOptions'

type Type = 'info' | 'success' | 'warn' | 'error' | 'default'

const toastify = (
  type: Type,
  message: string,
  toastOptions: ToastOptions<ToastOptionsType>,
) => {
  if (type === 'info') {
    return toast.info(message, toastOptions)
  } else if (type === 'success') {
    return toast.success(message, toastOptions)
  } else if (type === 'warn') {
    return toast.warn(message, toastOptions)
  } else if (type === 'error') {
    return toast.error(message, toastOptions)
  } else {
    return toast(message, toastOptions)
  }
}

export default toastify
