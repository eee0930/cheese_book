import { useEffect, useState } from 'react';

export const useBookViewer = () => {
  const [$script, setScript] = useState<HTMLScriptElement>();

  useEffect(() => {
    if (!$script) {
      settingInitial();
    }
  }, []);

  const settingInitial = () => {
    const $script = document.createElement('script');
    $script.src = 'https://www.google.com/books/jsapi.js';
    $script.type = 'text/javascript';
    $script.id = 'google-script';
    document.body.appendChild($script);
    setScript($script);
  };

  return { $script };
};
