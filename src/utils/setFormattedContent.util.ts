const setFormattedContent = (text: string, limit: number) => {
  let words: string[] = text.split(' ');
  let content: string = '';
  let wordCount: number = 0;

  if (words.length > limit) {
    content = text.split(' ').slice(0, limit).join(' ');
    wordCount = limit;
  } else {
    content = text;
    wordCount = words.filter(Boolean).length;
  }

  return { content, wordCount };
};

export default setFormattedContent;
