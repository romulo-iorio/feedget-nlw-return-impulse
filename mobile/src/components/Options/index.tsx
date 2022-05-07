import React from "react";
import { View, Text } from "react-native";

import { feedbackTypes } from "../../utils/feedbackTypes";
import { Copyright } from "../Copyright";
import { FeedbackType } from "../Widget";
import { Option } from "../Option";
import { styles } from "./styles";

interface IProps {
  setFeedbackType: React.Dispatch<React.SetStateAction<FeedbackType | null>>;
}

export function Options({ setFeedbackType }: IProps) {
  const handleClickOption = (feedbackType: FeedbackType) => {
    setFeedbackType(feedbackType);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deixe seu feedback</Text>

      <View style={styles.options}>
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <Option
            onPress={() => handleClickOption(key as FeedbackType)}
            title={value.title}
            image={value.image}
            key={key}
          />
        ))}
      </View>

      <Copyright />
    </View>
  );
}
