import type { ToastOptions } from 'react-toastify'

// lib
import toastify from '@/libs/toastify.lib'

// constant
import ConstantMessage from '@/constants/message.constant'

// validation
import ValidationContact from '@/validations/contact.validation'

// type
import type ToastOptionsType from '@/types/toastOptions'

const validateForm = (
  values,
  toastOptions: ToastOptions<ToastOptionsType>,
): boolean => {
  const { project, name, email, message } = values

  if (!ValidationContact.validateProjectName(project)) {
    toastify('error', ConstantMessage.ERROR_PROJECT_NAME, toastOptions)
    return false
  } else if (!ValidationContact.validateFullName(name)) {
    toastify('error', ConstantMessage.ERROR_NAME, toastOptions)
    return false
  } else if (!ValidationContact.validateEmail(email)) {
    toastify('error', ConstantMessage.ERROR_EMAIL, toastOptions)
    return false
  } else if (!ValidationContact.validateMessage(message)) {
    toastify('error', ConstantMessage.ERROR_MESSAGE, toastOptions)
    return false
  }

  // success
  toastify('success', ConstantMessage.SUCCESS_CONTACT, toastOptions)
  return true
}

export default validateForm
