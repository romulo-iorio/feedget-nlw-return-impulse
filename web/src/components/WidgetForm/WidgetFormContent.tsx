import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackType } from ".";

interface IProps {
  setFeedbackType: React.Dispatch<React.SetStateAction<FeedbackType | null>>;
  setFeedbackSent: React.Dispatch<React.SetStateAction<boolean>>;
  feedbackType: FeedbackType | null;
  feedbackSent: boolean;
}

const WidgetContent: React.FC<IProps> = ({
  setFeedbackType,
  setFeedbackSent,
  feedbackType,
  feedbackSent,
}) => {
  const handleRestartFeedback = () => {
    setFeedbackSent(false);
    setFeedbackType(null);
  };

  if (feedbackSent)
    return (
      <FeedbackSuccessStep handleRestartFeedback={handleRestartFeedback} />
    );

  if (!feedbackType)
    return <FeedbackTypeStep setFeedbackType={setFeedbackType} />;

  return (
    <FeedbackContentStep
      handleRestartFeedback={handleRestartFeedback}
      setFeedbackSent={setFeedbackSent}
      feedbackType={feedbackType}
    />
  );
};

export { WidgetContent };
