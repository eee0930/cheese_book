import { useEffect, useState } from 'react';

export const useAppendScript = (src: string) => {
  const [$script, setScript] = useState<HTMLScriptElement>();

  useEffect(() => {
    if (!$script) {
      settingInitial();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const settingInitial = () => {
    const $script = document.createElement('script');
    $script.src = src;
    $script.type = 'text/javascript';
    document.body.appendChild($script);
    setScript($script);
  };

  return $script;
};
