import { FC } from 'react'

// type
import type Props from '@/types/icon'

const index: FC<Props> = (props) => {
  const { fill = 'currentColor', size = '24', ...otherProps } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      {...otherProps}
    >
      <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
    </svg>
  )
}

export default index
