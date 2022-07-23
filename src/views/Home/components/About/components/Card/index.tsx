import { FC } from 'react'

type Props = {
  icon?: string
  title?: string
  subtitle?: string
}

// component
import GetIcon from '@/components/GetIcon'

const index: FC<Props> = (props) => {
  const { icon, title, subtitle } = props
  return (
    <>
      <div className="about__box">
        <i className="about__icon">
          <GetIcon icon={icon} />
        </i>
        <h3 className="about__title">{title}</h3>
        <span className="about__subtitle">{subtitle}</span>
      </div>
    </>
  )
}

export default index
