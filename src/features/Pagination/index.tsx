import React from 'react'

// type
import Props from '@/features/Pagination/types/pagination'

// style
import './style.scss'

// ui
import Link from '@/ui/Link'

// component
import GetIcon from '@/components/GetIcon'

// hook
import { DOTS, usePagination } from '@/features/Pagination/hooks/usePagination'

const index: React.FC<Props> = (props) => {
  const { page, url } = props

  const currentPage = page.currentPage
  const totalCount = page?.total
  const siblingCount = 1
  const pageSize = page.size

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  let lastPage = paginationRange[paginationRange.length - 1]

  return (
    <nav className="pagination__container">
      <div className="pagination__container-content">
        <Link
          className={`pagination__container-content--link ${
            paginationRange[0] === currentPage ? 'disabled' : ''
          }`}
          href={`/${typeof url === 'undefined' ? '' : url}${
            paginationRange[0] === currentPage - 1 ||
            paginationRange[0] === currentPage
              ? ''
              : paginationRange[0]
          }`}
        >
          <div
            className={`pagination__container-content--link-page ${
              paginationRange[0] === currentPage ? 'disabled' : ''
            }`}
          >
            <GetIcon icon={'ChevronLeftIcon'} />
          </div>
        </Link>
        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return (
              <div
                className="pagination__container-content--link dots"
                key={index}
              >
                &#8230;
              </div>
            )
          }

          return (
            <Link
              className={'pagination__container-content--link'}
              href={`/${typeof url === 'undefined' ? '' : url}${
                pageNumber === 1 ? '' : pageNumber
              }`}
              key={index}
            >
              <div
                className={`pagination__container-content--link-page ${
                  page.currentPage === pageNumber ? 'active' : ''
                }`}
              >
                {pageNumber}
              </div>
            </Link>
          )
        })}
        <Link
          className={`pagination__container-content--link ${
            lastPage === page.currentPage ? 'disabled' : ''
          }`}
          href={`/${typeof url === 'undefined' ? '' : url}${currentPage + 1}`}
        >
          <div
            className={`pagination__container-content--link-page ${
              lastPage === page.currentPage ? 'disabled' : ''
            }`}
          >
            <GetIcon icon={'ChevronRightIcon'} />
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default index
