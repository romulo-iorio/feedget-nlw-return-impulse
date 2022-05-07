import React from "react";
import { View, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import { Camera, Trash } from "phosphor-react-native";

import { theme } from "../../theme";
import { styles } from "./styles";

interface IProps {
  onRemoveScreenshot: () => void;
  onTakeScreenshot: () => void;
  takingScreenshot: boolean;
  screenshot: string | null;
}

export function ScreenshotButton({
  onRemoveScreenshot,
  onTakeScreenshot,
  takingScreenshot,
  screenshot,
}: IProps) {
  return (
    <TouchableOpacity
      onPress={screenshot ? onRemoveScreenshot : onTakeScreenshot}
      style={styles.container}
    >
      {screenshot ? (
        <View>
          {takingScreenshot ? (
            <ActivityIndicator color={theme.colors.text_on_brand_color} />
          ) : (
            <Image source={{ uri: screenshot }} style={styles.image} />
          )}

          <Trash
            color={theme.colors.text_secondary}
            style={styles.removeIcon}
            weight="fill"
            size={22}
          />
        </View>
      ) : (
        <Camera color={theme.colors.text_secondary} weight="bold" size={24} />
      )}
    </TouchableOpacity>
  );
}
