import { ElementType, FC, HTMLAttributes, ReactNode } from 'react'

import './style.scss'

interface Props extends HTMLAttributes<HTMLOrSVGElement> {
  tag?: ElementType
  className?: string
  children: ReactNode
  [x: string]: any
}

const index: FC<Props> = (props) => {
  const { tag: Tag = 'header', className = '', children, ...otherProps } = props
  return (
    <Tag className={`header ${className}`} {...otherProps}>
      {children}
    </Tag>
  )
}

export default index
