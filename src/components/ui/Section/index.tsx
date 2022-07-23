import { FC, ReactNode } from 'react'

import './style.scss'

type Props = {
  className?: string
  children: ReactNode
  [x: string]: any
}

const index: FC<Props> = (props) => {
  const { className = '', children, ...otherProps } = props
  return (
    <section className={`section ${className}`} {...otherProps}>
      {children}
    </section>
  )
}

export default index
