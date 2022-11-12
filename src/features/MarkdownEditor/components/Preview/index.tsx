import React from 'react';

import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

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
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={darcula as any}
                language={match[1]}
                showLineNumbers={true}
                PreTag="div"
                {...props}
              />
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
