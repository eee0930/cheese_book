import { useEffect, useState } from 'react';
declare global {
  interface Window {
    data: any;
  }
}
export const useAppendScript = (src: string) => {
  const [$script, setScript] = useState<HTMLScriptElement>();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<any>();

  useEffect(() => {
    if (!$script) {
      settingInitial();
    }
  }, []);

  useEffect(() => {
    if (isLoading) {
      setData(window.data);
    }
  }, [isLoading]);

  const settingInitial = () => {
    const $script = document.createElement('script');
    $script.src = `${src}&callback=data`;
    $script.type = 'text/javascript';
    document.body.appendChild($script);
    setScript($script);
    $script.addEventListener('load', () => setIsLoading(false));
  };

  return { data, isLoading };
};
