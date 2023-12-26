import {
  View,
  StyleSheet,
  Image,
  useWindowDimensions,
  Pressable,
} from "react-native";
import Text from "./Text";
import theme from "./theme";

const styles = StyleSheet.create({
  circle: {
    width: 100,
    height: 100,
    lineHeight: 100,
    borderRadius: "50%",
    fontSize: "50px",
    color: theme.colors.white,
    textAlign: "center",
    background: "#000",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: theme.colors.white,
    padding: 8,
  },
});

export const ReviewItem = (props) => {
  const { review } = props;

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text>{review.rating}</Text>
      </View>
      <View
        style={[
          styles.containerColumn,
          { width: useWindowDimensions().width - 50 },
        ]}
      >
        <Text fontSize={"title"} fontWeight="bold">
          {review?.user.username}
        </Text>
      </View>
    </View>
  );
};
