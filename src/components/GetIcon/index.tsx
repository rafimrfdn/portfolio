import { FC } from 'react'

// all icons
import * as Icons from '@/icons/index'

type Props = {
  icon?: string
  [x: string]: any
}

const GetIcon: FC<Props> = (props) => {
  const { icon, ...otherProps } = props

  const Icon = Icons[icon || 'MKAbuMattarIcon']

  return <>{Icon && <Icon {...otherProps} />}</>
}

export default GetIcon
