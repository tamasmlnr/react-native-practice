import { StyleSheet } from "react-native";
import Main from "./src/components/Main";
import { NativeRouter } from "react-router-native";
import createApolloClient from "./utils/createApolloClient";
import { ApolloProvider } from "@apollo/client";

export default function App() {
  const apolloClient = createApolloClient();
  return (
    <ApolloProvider client={apolloClient}>
      <NativeRouter>
        <Main />
      </NativeRouter>
    </ApolloProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
