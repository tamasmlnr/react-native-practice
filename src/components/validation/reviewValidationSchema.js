import * as yup from "yup";

const reviewValidationSchema = yup.object().shape({
  repoOwner: yup.string().required("Repository owner is required"),
  repoName: yup.string().required("Repository name is required"),
  rating: yup.number().required("Rating is required"),
  review: yup.string().required("Review comment is required"),
});

export default reviewValidationSchema;
