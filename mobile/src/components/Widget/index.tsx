import React, { useRef, useState } from "react";
import { ChatTeardropDots } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

import { Options } from "../Options";
import { Success } from "../Success";
import { Form } from "../Form";

import { feedbackTypes } from "../../utils/feedbackTypes";
import { theme } from "../../theme";
import { styles } from "./styles";

export type FeedbackType = keyof typeof feedbackTypes;

interface IProps {
  setFeedbackType: React.Dispatch<React.SetStateAction<FeedbackType | null>>;
  setFeedbackSent: React.Dispatch<React.SetStateAction<boolean>>;
  feedbackType: FeedbackType | null;
  feedbackSent: boolean;
}

function WidgetContent({
  setFeedbackType,
  setFeedbackSent,
  feedbackSent,
  feedbackType,
}: IProps) {
  const handleResetFeedback = () => {
    setFeedbackType(null);
    setFeedbackSent(false);
  };

  if (feedbackSent) return <Success onResetFeedback={handleResetFeedback} />;

  if (!feedbackType) return <Options setFeedbackType={setFeedbackType} />;

  return (
    <Form
      onResetFeedback={handleResetFeedback}
      setFeedbackSent={setFeedbackSent}
      feedbackType={feedbackType}
    />
  );
}

function Widget() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState<boolean>(false);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleOpen = () => {
    bottomSheetRef.current?.expand();
  };

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handleOpen}>
        <ChatTeardropDots
          color={theme.colors.text_on_brand_color}
          weight="bold"
          size={24}
        />
      </TouchableOpacity>

      <BottomSheet
        handleIndicatorStyle={styles.indicator}
        backgroundStyle={styles.modal}
        snapPoints={[1, 280]}
        ref={bottomSheetRef}
      >
        <WidgetContent
          setFeedbackType={setFeedbackType}
          setFeedbackSent={setFeedbackSent}
          feedbackSent={feedbackSent}
          feedbackType={feedbackType}
        />
      </BottomSheet>
    </>
  );
}

export default gestureHandlerRootHOC(Widget);
