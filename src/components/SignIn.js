import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import { Pressable, View, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "./theme";
import validationSchema from "./yupValidationSchema";

const styles = StyleSheet.create({
  submitButton: {
    height: 50,
    margin: 20,
    backgroundColor: theme.colors.blue,
    display: "flex",
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});

const SignIn = () => {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{ username: "", password: "" }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit }) => (
        <View>
          <FormikTextInput name={"username"} placeholder="Username" />
          <FormikTextInput
            name={"password"}
            placeholder="Password"
            secureTextEntry
          />
          <Pressable onPress={handleSubmit} style={styles.submitButton}>
            <Text
              style={{
                color: theme.colors.white,
                fontSize: 20,
              }}
            >
              Log in
            </Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

export default SignIn;
