import { View, StyleSheet, Pressable, Text, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "./theme";
import { Link } from "react-router-native";
import useAuthStorage from "../../hooks/useAuthStorage";
import { useState, useEffect } from "react";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    height: 80,
    backgroundColor: theme.colors.appBarPrimary,
    display: "flex",
    flexDirection: "row",
    paddingTop: 27,
  },
  tabText: {
    color: theme.colors.white,
    fontSize: 24,
    marginLeft: 7,
    fontWeight: "600",
  },
});

const AppBar = () => {
  const authStorage = useAuthStorage();
  const [authKey, setAuthKey] = useState(undefined);
  const isUserSignedIn = !!authKey;

  useEffect(() => {
    (async () => {
      const key = await authStorage.getAccessToken();
      setAuthKey(key);
    })();
  }, [authKey]);

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        {!isUserSignedIn ? (
          <Link to="/login">
            <Text style={styles.tabText}>Sign in</Text>
          </Link>
        ) : (
          <Pressable
            onPress={async () => {
              await authStorage.removeAccessToken();
              setAuthKey(undefined);
            }}
          >
            <Text style={styles.tabText}>Sign out</Text>
          </Pressable>
        )}
        <Pressable>
          <Link to="/">
            <Text style={styles.tabText}>Repositories</Text>
          </Link>
        </Pressable>

        <Pressable>
          <Link to="/review">
            <Text style={styles.tabText}>Write review</Text>
          </Link>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default AppBar;
