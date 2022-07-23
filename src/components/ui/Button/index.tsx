import { FC, ReactNode } from 'react'

import './style.scss'

type Props = {
  button_type?: string | 'primary' | 'outline'
  className?: string
  children?: ReactNode
  [x: string]: any
}

const index: FC<Props> = (props) => {
  const {
    button_type = 'primary',
    className = '',
    children,
    ...otherProps
  } = props

  return (
    <button
      className={`${
        button_type === 'primary' ? 'button' : 'button button--ghost'
      } ${className}`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default index
