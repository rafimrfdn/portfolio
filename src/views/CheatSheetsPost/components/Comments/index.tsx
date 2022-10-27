import { useUtterances } from './hooks/useUtterances';
import './style.scss';

const commentNodeId = 'comments';

const Comments = () => {
  const getTheme = () => {
    const theme = localStorage.getItem('selected-theme');

    return theme === 'light' ? 'github-light' : 'github-dark';
  };

  useUtterances(commentNodeId, getTheme());

  return (
    <div className={'comments'}>
      <h2 className="section__title comments__title">Comments</h2>
      <div id={commentNodeId} />
    </div>
  );
};

export default Comments;
