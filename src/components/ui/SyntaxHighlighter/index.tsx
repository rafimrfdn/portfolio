import React, { FC } from 'react';

import ReactHighlightSyntax, {
  Theme,
  CopyBtnTheme,
} from 'react-highlight-syntax';

import handelLanguage from './utils/handelLanguage';

type Props = {
  language: string;
  theme?: Theme;
  copy?: boolean;
  copyBtnTheme?: CopyBtnTheme;
  children: string;
};

const SyntaxHighlighter: FC<Props> = (props) => {
  const {
    language,
    theme = 'Base16Nord',
    copy = true,
    copyBtnTheme = 'Dark',
    children,
  } = props;
  return (
    <ReactHighlightSyntax
      language={handelLanguage(language)}
      theme={theme}
      copy={copy}
      copyBtnTheme={copyBtnTheme}
    >
      {children}
    </ReactHighlightSyntax>
  );
};

export default React.memo(SyntaxHighlighter);
