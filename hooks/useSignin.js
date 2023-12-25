import { useMutation } from "@apollo/client";
import { LOGIN } from "../graphql/queryLogin";

export const useSignIn = () => {
  const [mutate, { data }] = useMutation(LOGIN);

  const signIn = async ({ username, password }) => {
    await mutate({
      variables: {
        credentials: {
          username: username,
          password: password,
        },
      },
    });
  };

  return [signIn, data];
};
