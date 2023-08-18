import { useEffect, useRef, useState } from 'react';
import { useBookViewer } from '../hooks/useBookViewer';

declare global {
  interface Window {
    google: any;
  }
}

interface IIsbn {
  isbn: string;
}

function BookViewer({ isbn }: IIsbn) {
  const viewerCanvas = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [googleBooks, setGoogleBooks] = useState<any>();
  const [bookViewer, setBookViewer] = useState<any>();
  const { $script } = useBookViewer();

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
        }
      }
    } else {
      return;
    }
  };

  const handleNotFound = () => alert('could not embed the book! 🤔');

  const initialize = (viewer: any) =>
    viewer.load(`ISBN:${isbn}`, handleNotFound);

  return (
    <>
      {loaded && (
        <div ref={viewerCanvas} style={{ width: '300px', height: '200px' }} />
      )}
    </>
  );
}

export default BookViewer;
