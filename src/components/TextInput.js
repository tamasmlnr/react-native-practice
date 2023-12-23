import { TextInput as NativeTextInput, StyleSheet } from "react-native";
import theme from "./theme";

const styles = StyleSheet.create({
  textInputStyle: {
    borderWidth: 1,
    margin: 20,
    height: 50,
    padding: 8,
  },
  fieldError: {
    borderColor: theme.colors.error,
    color: theme.colors.error,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
    style,
    styles.textInputStyle,
    !!error && styles.fieldError,
  ];

  return (
    <NativeTextInput
      placeholderTextColor={
        !!error ? theme.colors.error : theme.colors.appBarPrimary
      }
      style={textInputStyle}
      {...props}
    />
  );
};

export default TextInput;
