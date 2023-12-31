import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
    appBarPrimary: "#24292e",
    white: "#fff",
    blue: "#0163D7",
    gray: "#E1E4E7",
    error: "#d73a4a",
  },
  fontSizes: {
    body: 14,
    subheading: 18,
    title: 28,
  },
  fonts: {
    main: Platform.select({
      android: "Roboto",
      ios: "Arial",
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

export default theme;
