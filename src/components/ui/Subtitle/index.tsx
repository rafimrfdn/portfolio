import { FC, ReactNode } from 'react'

//style
import './style.scss'

type Props = {
  className?: string
  children: ReactNode
  [x: string]: any
}

const index: FC<Props> = (props) => {
  const { className = '', children, ...otherProps } = props
  return (
    <span className={`section__subtitle ${className}`} {...otherProps}>
      {children}
    </span>
  )
}

export default index
