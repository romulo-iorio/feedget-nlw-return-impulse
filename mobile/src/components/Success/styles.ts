import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    marginBottom: 10,
    marginTop: 42,
    height: 36,
    width: 36,
  },
  title: {
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.medium,
    marginBottom: 24,
    fontSize: 20,
  },
  button: {
    backgroundColor: theme.colors.surface_secondary,
    justifyContent: "center",
    paddingHorizontal: 24,
    alignItems: "center",
    marginBottom: 56,
    borderRadius: 4,
    height: 40,
  },
  buttonTitle: {
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.medium,
    fontSize: 14,
  },
});
