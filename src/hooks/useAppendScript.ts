import { useEffect, useState } from 'react';
declare global {
  interface Window {
    printData: (data: any) => void;
  }
}
export const useAppendScript = <T>(src: string) => {
  const [$script, setScript] = useState<HTMLScriptElement>();
  const [isLoading, setIsLoading] = useState(true);
  const [printData, setPrintData] = useState<(data: T) => void>();

  useEffect(() => {
    if (!$script) {
      settingInitial();
    }
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setPrintData(window.printData);
    }
  }, [isLoading]);

  const settingInitial = () => {
    const $script = document.createElement('script');
    $script.src = `${src}&callback=printData`;
    $script.type = 'text/javascript';
    document.body.appendChild($script);
    setScript($script);
    $script.addEventListener('load', () => setIsLoading(false));
  };

  return { printData, isLoading };
};
