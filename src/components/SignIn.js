import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import { Pressable, View, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "./theme";
import validationSchema from "./yupValidationSchema";
import { ApolloClient, useMutation } from "@apollo/client";
import { LOGIN } from "../../graphql/queryLogin";
import useAuthStorage from "../../hooks/useAuthStorage";
import { useNavigate } from "react-router-native";

export const buttonStyles = StyleSheet.create({
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
  const [mutate, { data }] = useMutation(LOGIN);
  const authStorage = useAuthStorage();
  const navigate = useNavigate();
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{ username: "", password: "" }}
      onSubmit={async (values) => {
        try {
          const mutationResponse = await mutate({
            variables: {
              credentials: {
                username: values.username,
                password: values.password,
              },
            },
          });
          await authStorage.removeAccessToken();
          await authStorage.setAccessToken(
            mutationResponse.data.authenticate.accessToken
          );
          navigate("/");
        } catch (e) {
          console.log(e);
        }
      }}
    >
      {({ handleSubmit }) => (
        <View>
          <FormikTextInput name={"username"} placeholder="Username" />
          <FormikTextInput
            name={"password"}
            placeholder="Password"
            secureTextEntry
          />
          <Pressable onPress={handleSubmit} style={buttonStyles.submitButton}>
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
