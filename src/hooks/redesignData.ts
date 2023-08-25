export const useAuthors = (authors: string) => {
  const REMOVE_STR = '(지은이)';
  const authorArr = authors.split(',');
  const len = authorArr.length;
  if (len === 1) {
    const author = authors.replace(REMOVE_STR, '');
    return author;
  } else {
    const author = authorArr[0].replace(REMOVE_STR, '');
    return `${author} 외 ${len - 1}명`;
  }
};
