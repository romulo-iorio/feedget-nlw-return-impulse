import React, { useState } from "react";
import { View, TextInput, Image, Text, TouchableOpacity } from "react-native";
import { captureScreen } from "react-native-view-shot";
import { ArrowLeft } from "phosphor-react-native";
import * as FileSystem from "expo-file-system";

import { FeedbackType } from "../Widget";
import { theme } from "../../theme";

import { styles } from "./styles";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { ScreenshotButton } from "../ScreenshotButton";
import { Button } from "../Button";
import { createFeedback, IFeedback } from "../../libs/api/feedback";

interface IProps {
  setFeedbackSent: React.Dispatch<React.SetStateAction<boolean>>;
  onResetFeedback: () => void;
  feedbackType: FeedbackType;
}

export function Form({
  setFeedbackSent,
  onResetFeedback,
  feedbackType,
}: IProps) {
  const [takingScreenshot, setTakingScreenshot] = useState<boolean>(false);
  const [isSendingFeedback, setIsSendingFeedback] = useState<boolean>(false);
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string>("");

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  const handleScreenshot = async () => {
    setTakingScreenshot(true);
    try {
      const screenshot = await captureScreen({ format: "jpg", quality: 0.8 });
      setScreenshot(screenshot);
    } catch (e) {
      console.log(e);
    }
    setTakingScreenshot(false);
  };

  const handleScreenshotRemove = () => {
    setScreenshot(null);
  };

  const handleSendFeedback = async () => {
    if (isSendingFeedback) return;

    setIsSendingFeedback(true);

    try {
      const screenshotBase64 =
        screenshot &&
        (await FileSystem.readAsStringAsync(screenshot, {
          encoding: FileSystem.EncodingType.Base64,
        }));
      const data: IFeedback = {
        type: feedbackType as FeedbackType,
        comment: feedback,
        screenshot: `data:image/png;base64,${screenshotBase64}`,
      };
      await createFeedback(data);
      setIsSendingFeedback(false);
      setFeedbackSent(true);
    } catch (e) {
      console.log(e);
      setIsSendingFeedback(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onResetFeedback}>
          <ArrowLeft
            color={theme.colors.text_secondary}
            weight="bold"
            size={24}
          />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Image style={styles.image} source={feedbackTypeInfo.image} />
          <Text style={styles.titleText}>{feedbackTypeInfo.title}</Text>
        </View>
      </View>

      <TextInput
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo"
        placeholderTextColor={theme.colors.text_secondary}
        onChangeText={(text) => setFeedback(text)}
        style={styles.input}
        autoCorrect={false}
        value={feedback}
        multiline
      />

      <View style={styles.footer}>
        <ScreenshotButton
          onRemoveScreenshot={handleScreenshotRemove}
          takingScreenshot={takingScreenshot}
          onTakeScreenshot={handleScreenshot}
          screenshot={screenshot}
        />

        <Button
          onPress={handleSendFeedback}
          isLoading={isSendingFeedback}
          disabled={!feedback}
        />
      </View>
    </View>
  );
}
