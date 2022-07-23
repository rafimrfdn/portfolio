import { FC } from 'react'

type Props = {
  name?: string
  type?: string
  placeholder?: string
  className?: string
  [x: string]: any
}

const index: FC<Props> = (props) => {
  const { name, type, placeholder, className, ...otherProps } = props

  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      className={className}
      required
      {...otherProps}
    />
  )
}

export default index
