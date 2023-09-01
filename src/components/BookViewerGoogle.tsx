import { useEffect, useRef, useState } from 'react';
import { useAppendScript } from '../hooks/appendScript';
import { useOutletContext } from 'react-router-dom';

declare global {
  interface Window {
    google: any;
  }
}

interface IIsbn {
  isbn: string;
}
const VIEWER_SRC = process.env.REACT_APP_BOOK_VIEWER as string;

function BookViewerGoogle() {
  const { isbn } = useOutletContext<IIsbn>();
  const viewerCanvas = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [googleBooks, setGoogleBooks] = useState<any>();
  const [bookViewer, setBookViewer] = useState<any>();
  const $script = useAppendScript(VIEWER_SRC);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => initialLoad(), [$script]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => initialEmbed(), [loaded]);

  const initialLoad = () => {
    if ($script) {
      $script.addEventListener('load', () => {
        const { google } = window;
        setGoogleBooks(google);
        setLoaded(true);
      });
    }
  };

  const initialEmbed = () => {
    if (loaded) {
      if (bookViewer) {
        initialize(bookViewer);
      } else {
        googleBooks.books.load();
        if (viewerCanvas.current) {
          googleBooks.books.setOnLoadCallback(() => {
            const viewer = new googleBooks.books.DefaultViewer(
              viewerCanvas.current
            );
            setBookViewer(viewer);
            initialize(viewer);
          });
          viewerCanvas.current.id = 'googleBooksViewer';
        }
      }
    } else {
      return;
    }
  };

  const handleNotFound = () => alert('could not embed the book! 🤔');

  const initialize = (viewer: any) =>
    viewer.load(`ISBN:${isbn}`, handleNotFound);

  const handleNextPage = () => bookViewer.nextPage();

  // const handlePrevPage = () => bookViewer.previousPage();

  // const goToPage = (page: number) => bookViewer.goToPage(page);

  return (
    <>
      {loaded && (
        <>
          <div ref={viewerCanvas} style={{ width: '300px', height: '200px' }} />
          <button onClick={handleNextPage}>다음페이지</button>
        </>
      )}
    </>
  );
}

export default BookViewerGoogle;
