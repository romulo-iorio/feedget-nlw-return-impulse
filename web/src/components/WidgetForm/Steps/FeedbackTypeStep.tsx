import { feedbackTypes, FeedbackType } from "..";
import { CloseButton } from "../../CloseButton";

interface IFeedbackTypeStepProps {
  setFeedbackType: React.Dispatch<React.SetStateAction<FeedbackType | null>>;
}

const FeedbackTypeStep: React.FC<IFeedbackTypeStepProps> = ({
  setFeedbackType,
}) => {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>

        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          const { title, image } = value;

          return (
            <button
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              onClick={() => setFeedbackType(key as FeedbackType)}
              type="button"
              key={key}
            >
              <img src={image.source} alt={image.alt} />
              <span>{title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
};

export { FeedbackTypeStep };
