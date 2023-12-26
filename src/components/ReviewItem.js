import {
  View,
  StyleSheet,
  Image,
  useWindowDimensions,
  Pressable,
  ScrollView,
} from "react-native";
import Text from "./Text";
import theme from "./theme";

const styles = StyleSheet.create({
  circleContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: theme.colors.blue,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    color: theme.colors.blue,
    fontSize: 18,
    fontWeight: "bold",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: theme.colors.white,
    padding: 8,
  },
  containerColumn: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: 8,
    rowGap: 8,
    columnGap: 20,
  },
});

export const ReviewItem = (props) => {
  const { review } = props;
  const shownItem = review?.node;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.circleContainer}>
        <Text style={styles.numberText}>{shownItem?.rating}</Text>
      </View>
      <View
        style={[
          styles.containerColumn,
          { width: useWindowDimensions().width - 50 },
        ]}
      >
        <Text fontSize={"title"} fontWeight="bold">
          {shownItem?.user?.username}
        </Text>
        <Text fontSize={"subheading"} fontWeight="bold">
          {new Date(shownItem?.createdAt).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </Text>
        <Text fontSize={"body"} fontWeight="bold">
          {shownItem?.text}
        </Text>
      </View>
    </ScrollView>
  );
};
