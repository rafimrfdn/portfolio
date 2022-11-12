import React from 'react';

import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';

import SyntaxHighlighter from '@/ui/SyntaxHighlighter';

import './github-markdown.css';

import './style.scss';

interface Props {
  doc: string;
}

const Preview: React.FC<Props> = (props) => {
  const Pre = ({ children }) => <pre>{children}</pre>;

  return (
    <div className={'preview markdown-body'}>
      <ReactMarkdown
        children={props.doc}
        remarkPlugins={[remarkGfm]}
        components={{
          pre: Pre,
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter language={match[1].toString()}>
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </div>
  );
};

export default Preview;
