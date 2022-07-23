import emailjs from '@emailjs/browser'

// util
import validateForm from '@/utils/validateForm.util'

const sendEmail = async (
  values: { project: any; name: any; email: any; message: any },
  serviceId: string,
  templateId: string,
  publicKey: string,
  toastOptions,
  e: any,
) => {
  e.preventDefault()

  const isValid = validateForm(values, toastOptions)

  if (isValid === true) {
    const { project, name, email, message } = values

    const templateParams = {
      project: project,
      name: name,
      email: email,
      message: message,
    }

    const send = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey,
    )
    console.log(send)
    e.target.reset()
  }
}

export default sendEmail
