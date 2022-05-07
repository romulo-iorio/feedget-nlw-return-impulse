import React from "react";
import {
  TouchableOpacityProps,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from "react-native";
import { theme } from "../../theme";

import { styles } from "./styles";

interface IProps extends TouchableOpacityProps {
  isLoading: boolean;
}

export function Button({ isLoading, ...rest }: IProps) {
  const containerStyle = {
    ...styles.container,
    opacity: rest.disabled || isLoading ? 0.5 : 1,
  };

  return (
    <TouchableOpacity style={containerStyle} {...rest}>
      {isLoading ? (
        <ActivityIndicator color={theme.colors.text_on_brand_color} />
      ) : (
        <Text style={styles.title}>Enviar feedback</Text>
      )}
    </TouchableOpacity>
  );
}
