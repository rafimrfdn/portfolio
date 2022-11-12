import React, { useCallback, useEffect } from 'react';

import { EditorState } from '@codemirror/state';

import useCodeMirror from '@/features/MarkdownEditor/hooks/useCodeMirror';

import './style.scss';

interface Props {
  initialDoc: string;
  onChange: (doc: string) => void;
}

const Editor: React.FC<Props> = (props) => {
  const { onChange, initialDoc } = props;

  const handleChange = useCallback(
    (state: EditorState) => onChange(state.doc.toString()),
    [onChange],
  );

  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
    initialDoc: initialDoc,
    onChange: handleChange,
  });

  useEffect(() => {
    if (editorView) {
      // Do nothing for now
    } else {
      // loading editor
    }
  }, [editorView]);

  return (
    <>
      <div className={'editor'} ref={refContainer}></div>
    </>
  );
};

export default Editor;