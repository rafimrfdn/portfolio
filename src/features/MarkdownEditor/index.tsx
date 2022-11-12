import React, { useState, useCallback } from 'react';

import Editor from '@/features/MarkdownEditor/components/Editor';
import Preview from '@/features/MarkdownEditor/components/Preview';

import { mkd } from '@/features/MarkdownEditor/__mocks__/markdown.mock';

import './style.scss';

const MarkdownEditor = () => {
  const [doc, setDoc] = useState<string>(mkd);

  const handleDocChange = useCallback((newDoc: string) => {
    setDoc(newDoc);
  }, []);

  return (
    <div className={'app'}>
      <Editor onChange={handleDocChange} initialDoc={doc} />
      <Preview doc={doc} />
    </div>
  );
};

export default MarkdownEditor;
