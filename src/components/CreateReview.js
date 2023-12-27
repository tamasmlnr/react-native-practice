import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import { Pressable, View, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "./theme";
import validationSchema from "./validation/loginValidationSchema";
import { ApolloClient, useMutation } from "@apollo/client";
import { LOGIN } from "../../graphql/queryLogin";
import useAuthStorage from "../../hooks/useAuthStorage";
import { useNavigate, useParams } from "react-router-native";
import reviewValidationSchema from "./validation/reviewValidationSchema";
import { CREATE_REVIEW } from "../../graphql/createComment";
import { validateSDL } from "graphql/validation/validate";

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

const CreateReview = () => {
  const [mutate, { data }] = useMutation(CREATE_REVIEW);
  const { userName, repoName } = useParams();
  const authStorage = useAuthStorage();
  const navigate = useNavigate();

  return (
    <Formik
      validationSchema={reviewValidationSchema}
      initialValues={{
        repoOwner: userName ?? "",
        repoName: repoName ?? "",
        rating: 0,
        review: "",
      }}
      onSubmit={async (values) => {
        try {
          const mutationResponse = await mutate({
            variables: {
              review: {
                ownerName: values.repoOwner,
                rating: parseInt(values.rating),
                repositoryName: values.repoName,
                text: values.review,
              },
            },
          });
          navigate(`/repository/${mutationResponse.data.repositoryId}`);
        } catch (e) {
          console.log(e);
        }
      }}
    >
      {({ handleSubmit }) => (
        <View>
          <FormikTextInput
            editable={!userName}
            name={"repoOwner"}
            placeholder="Repository owner name"
          />
          <FormikTextInput
            editable={!repoName}
            name={"repoName"}
            placeholder="Repository owner name"
          />
          <FormikTextInput
            name={"rating"}
            placeholder="Rating"
            keyboardType="numeric"
            inputMode="numeric"
          />
          <FormikTextInput name={"review"} placeholder="Review" />
          <Pressable onPress={handleSubmit} style={buttonStyles.submitButton}>
            <Text
              style={{
                color: theme.colors.white,
                fontSize: 20,
              }}
            >
              Submit review
            </Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

export default CreateReview;
