import { Camera, Trash } from "phosphor-react";
import html2canvas from "html2canvas";
import { useState } from "react";
import { Loading } from "../Loading";

interface IProps {
  setScreenshot: React.Dispatch<React.SetStateAction<string | null>>;
  screenshot: string | null;
}

const ScreenshotButton: React.FC<IProps> = ({ setScreenshot, screenshot }) => {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState<boolean>(false);

  const handleTakeScreenshot = async () => {
    setIsTakingScreenshot(true);

    const screenshot = await html2canvas(document.querySelector("html")!);
    const base64image = screenshot.toDataURL("image/png");
    setScreenshot(base64image);

    setIsTakingScreenshot(false);
  };

  const deleteTakenScreenshot = () => setScreenshot(null);

  if (screenshot)
    return (
      <button
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-color"
        style={{ backgroundImage: `url(${screenshot})` }}
        type="button"
      >
        <Trash weight="fill" onClick={deleteTakenScreenshot} />
      </button>
    );

  return (
    <button
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors buttonFocusClasses"
      onClick={handleTakeScreenshot}
      type="button"
    >
      {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
    </button>
  );
};

export { ScreenshotButton };
