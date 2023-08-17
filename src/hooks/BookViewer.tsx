import { useEffect, useRef, useState } from 'react';

const { books } = (window as any).google;

function BookViewer(isbn: string) {
  const viewerCanvas = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [googleBooks, setGoogleBooks] = useState<any>();
  const handleNotFound = () => alert('could not embed the book! 🤔');

  useEffect(() => settingInitial(), [isbn]);
  const settingInitial = () => {
    const $script = document.createElement('script');
    $script.src = 'https://www.google.com/books/jsapi.js';
    $script.type = 'text/javascript';
    $script.addEventListener('load', () => setLoaded(true));
    $script.id = 'google-script';
    document.body.appendChild($script);
  };

  useEffect(() => {
    if (!loaded) {
      return;
    } else {
      if (googleBooks) {
        let viewer = new books.DefaultViewer(viewerCanvas.current);
        viewer.load(`ISBN:${isbn}`, handleNotFound);
      } else {
        books.load();
        books.setOnLoadCallback(() => {
          let viewer = new books.DefaultViewer(viewerCanvas.current);
          setGoogleBooks(viewer);
          viewer.load(`ISBN:${isbn}`, handleNotFound);
        });
      }
    }
  }, [loaded]);

  return <>{loaded ? <div ref={viewerCanvas} /> : 'Script not loaded'}</>;
}

export default BookViewer;
