import { StyleSheet } from "react-native";

import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.surface_secondary,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    borderRadius: 4,
    marginRight: 8,
    height: 40,
    width: 40,
  },
  removeIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  image: {
    height: 40,
    width: 40,
  },
});
