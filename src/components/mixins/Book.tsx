interface IBook {
  book: {
    title: string;
    author: string;
    cover: string;
  };
}
function Book({ book }: IBook) {
  return null;
}

export default Book;
