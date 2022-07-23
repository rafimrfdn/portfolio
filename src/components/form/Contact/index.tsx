import { FC, useRef, useState } from 'react'

import type { ToastOptions } from 'react-toastify'
import { ToastContainer } from 'react-toastify'

// type
import type ToastOptionsType from '@/types/toastOptions'

type Values = {
  name: string
  value: string
}

type Props = {
  serviceId: string
  templateId: string
  publicKey: string
}

// style
import 'react-toastify/dist/ReactToastify.css'
import './style.scss'

// ui
import Button from '@/ui/Button'
import Input from '@/ui/Input'
import Label from '@/ui/Label'
import Textarea from '@/ui/Textarea'

// component
import GetIcon from '@/components/GetIcon'

// lib
import sendEmail from '@/libs/sendEmail.lib'

const index: FC<Props> = (props) => {
  const { serviceId, templateId, publicKey } = props

  const form = useRef()

  const [values, setValues] = useState({
    project: '',
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: { target: Values }) => {
    console.log({ [e.target.name]: e.target.value })

    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const toastOptions: ToastOptions<ToastOptionsType> = {
    position: 'bottom-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark',
  }

  return (
    <>
      <form
        action={''}
        className={'form'}
        ref={form}
        onSubmit={(e) =>
          sendEmail(values, serviceId, templateId, publicKey, toastOptions, e)
        }
      >
        <div className={'form__input_group'}>
          <Label htmlFor={'name'} className={'form__input_group-lable'}>
            Full Name
          </Label>
          <Input
            type={'text'}
            id={'name'}
            name={'name'}
            placeholder={'Insert your fullname'}
            className={'form__input_group-input'}
            onChange={(e: { target: Values }) => handleChange(e)}
          />
        </div>

        <div className={'form__input_group'}>
          <Label htmlFor={'email'} className={'form__input_group-lable'}>
            Mail
          </Label>
          <Input
            type={'email'}
            id={'email'}
            name={'email'}
            placeholder={'Insert your email'}
            className={'form__input_group-input'}
            onChange={(e: { target: Values }) => handleChange(e)}
          />
        </div>

        <div className={'form__input_group'}>
          <Label htmlFor={'project'} className={'form__input_group-lable'}>
            Project
          </Label>
          <Input
            type={'text'}
            id={'project'}
            name={'project'}
            className={'form__input_group-input'}
            placeholder={'Insert your project name'}
            onChange={(e: { target: Values }) => handleChange(e)}
          />
        </div>

        <div className={'form__input_group form__input_group-area'}>
          <Label htmlFor={'message'} className={'form__input_group-lable'}>
            Message
          </Label>
          <Textarea
            id={'message'}
            name={'message'}
            className={'form__input_group-input'}
            placeholder={'Write your project'}
            onChange={(e: { target: Values }) => handleChange(e)}
          ></Textarea>
        </div>

        <Button
          className={'form__input_group-button'}
          type={'submit'}
          titel={'Send Message'}
        >
          Send Message
          <span className={'form__input_group-button--icon'}>
            <GetIcon icon={'SendIcon'} />
          </span>
        </Button>
      </form>

      <ToastContainer />
    </>
  )
}

export default index
