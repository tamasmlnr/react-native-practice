import { StyleSheet } from "react-native";
import Main from "./src/components/Main";
import { NativeRouter } from "react-router-native";
import createApolloClient from "./utils/createApolloClient";
import { ApolloProvider } from "@apollo/client";
import AuthStorage from "./utils/authStorage";
import AuthStorageContext from "./contexts/AuthStorageContext";

export default function App() {
  const authStorage = new AuthStorage();
  const apolloClient = createApolloClient(authStorage);

  return (
    <ApolloProvider client={apolloClient}>
      <NativeRouter>
        <AuthStorageContext.Provider value={authStorage}>
          <Main />
        </AuthStorageContext.Provider>
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
