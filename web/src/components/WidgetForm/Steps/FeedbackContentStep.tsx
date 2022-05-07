import { useState } from "react";
import { ArrowLeft } from "phosphor-react";

import { ScreenshotButton } from "../ScreenshotButton";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { createFeedback } from "../../../services/api/feedbacks";
import { Loading } from "../../Loading";

interface IFeedbackContentStepProps {
  setFeedbackSent: React.Dispatch<React.SetStateAction<boolean>>;
  handleRestartFeedback: () => void;
  feedbackType: FeedbackType;
}

const FeedbackContentStep: React.FC<IFeedbackContentStepProps> = ({
  handleRestartFeedback,
  setFeedbackSent,
  feedbackType,
}) => {
  const [isSendingFeedback, setIsSendingFeedback] = useState<boolean>(false);
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState<string>("");

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  const { title, image } = feedbackTypeInfo;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSendingFeedback(true);

    try {
      const data = { type: feedbackType, screenshot, comment };
      await createFeedback(data);
      setIsSendingFeedback(false);
      setFeedbackSent(true);
    } catch (e) {
      console.log(e);
      setIsSendingFeedback(false);
    }
  };

  return (
    <>
      <header>
        <button
          className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
          onClick={handleRestartFeedback}
          type="button"
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <img src={image.source} alt={image.alt} className="w-6 h-6" />
          {title}
        </span>

        <CloseButton />
      </header>

      <form className="my-4 w-full" onSubmit={handleSubmit}>
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:outline-none focus:ring-brand-500 focus:ring-1 resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            setScreenshot={setScreenshot}
            screenshot={screenshot}
          />

          <button
            className="p-2 bg-brand-500 rounded-md border-transparent flex flex-1 justify-center items-center text-sm hover:bg-brand-300  transition-colors buttonFocusClasses disabled:opacity-50 disabled:hover:bg-brand-500"
            disabled={!comment || isSendingFeedback}
            type="submit"
          >
            {isSendingFeedback ? <Loading /> : <>Enviar feedback</>}
          </button>
        </footer>
      </form>
    </>
  );
};

export { FeedbackContentStep };
