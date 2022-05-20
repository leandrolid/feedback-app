import html2canvas from 'html2canvas';
import { Camera, Trash } from 'phosphor-react';
import { useState } from 'react';

import { Loading } from '../../Loading';

interface ScreenShotButtonProps {
  // eslint-disable-next-line no-unused-vars
  setScreenshot: (screenshot: string | null) => void;
  screenshot: string | null;
}

export function ScreenShotButton({ setScreenshot, screenshot }: ScreenShotButtonProps) {
  const [isTakingScreenShot, setIsTakingScreenshot] = useState(false);

  const takeScreenShot = async () => {
    setIsTakingScreenshot(true);

    const canvas = await html2canvas(document.querySelector('html')!);
    const base64Image = canvas.toDataURL('image/png');
    setScreenshot(base64Image);

    setIsTakingScreenshot(false);
  };

  const removeScreenshot = () => setScreenshot(null);

  if (screenshot) {
    return (
      <button
        type="button"
        onClick={removeScreenshot}
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        className="p-1 w-10 h-10 rounded-md border-transparent flex items-end justify-end text-zinc-400 hover:text-zinc-100 transition-colors"
      >
        <Trash weight="fill" />
      </button>
    );
  }
  return (
    <button
      type="button"
      onClick={takeScreenShot}
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
    >
      {isTakingScreenShot ? <Loading /> : <Camera className="w-6 h-6" />}
    </button>
  );
}
