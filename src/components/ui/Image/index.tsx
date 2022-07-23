import { FC } from 'react'

type Props = {
  src: string
  className?: string
  [x: string]: any
}

const index: FC<Props> = (props) => {
  const { src, className = '', ...otherProps } = props
  return <img src={src} className={className} {...otherProps} loading="lazy" />
}

export default index
