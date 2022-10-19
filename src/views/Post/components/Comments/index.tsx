import { useUtterances } from './hooks/useUtterances'
import './style.scss'

const commentNodeId = 'comments'

const Comments = () => {
  const getTheme = () => {
    const theme = localStorage.getItem('selected-theme')

    return theme === 'light' ? 'github-light' : 'github-dark'
  }

  useUtterances(commentNodeId, getTheme())

  return <div id={commentNodeId} className={'comments'} />
}

export default Comments
