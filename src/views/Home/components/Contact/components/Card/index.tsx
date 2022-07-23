import { FC } from 'react'

// type
import type Contact from '@/views/Home/components/Contact/types/contact'

// ui
import Link from '@/ui/Link'

// component
import GetIcon from '@/components/GetIcon'

const index: FC<Contact> = (props) => {
  const { name, value, icon, title, url } = props
  return (
    <>
      <div className="contact__card">
        <span className="contact__card-icon">
          <GetIcon icon={icon} />
        </span>
        <h3 className="contact__card-title">{name}</h3>
        <span className="contact__card-data">{value}</span>

        <Link
          href={url}
          target="__blank"
          title={title}
          className="contact__button"
        >
          Write me{' '}
          <span className="contact__button-icon">
            <GetIcon icon={'RightArrowIcon'} />
          </span>
        </Link>
      </div>
    </>
  )
}

export default index
