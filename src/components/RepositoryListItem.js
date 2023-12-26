import {
  View,
  StyleSheet,
  Image,
  useWindowDimensions,
  Pressable,
} from "react-native";
import theme from "./theme";
import Text from "./Text";
import { useNavigate, useParams } from "react-router-native";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../../graphql/getRepository";
import { buttonStyles } from "./SignIn";
import * as Linking from "expo-linking";
import { ReviewItem } from "./ReviewItem";
import { FlatList } from "react-native-web";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: theme.colors.white,
    padding: 8,
  },
  avatarImg: {
    height: 50,
    width: 50,
    borderRadius: 150,
  },
  containerColumn: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: 8,
    rowGap: 8,
    columnGap: 20,
  },
  descriptionItem: {
    backgroundColor: theme.colors.blue,
    alignSelf: "flex-start",
    padding: 4,
    borderRadius: 5,
  },
  descriptionItemText: {
    color: theme.colors.white,
    fontSize: 18,
  },
  centeredText: {
    textAlign: "center",
  },
});

export const RepositoryListItem = (props) => {
  const { id } = useParams();
  const { listItem, singleView } = props;
  const { data: repository, loading } = useQuery(GET_REPOSITORY, {
    skip: !singleView,
    variables: {
      repositoryId: id,
    },
  });
  const navigate = useNavigate();
  const displayedItem = singleView ? repository?.repository : listItem;
  console.log(displayedItem);
  return (
    <Pressable
      onPress={() => {
        navigate(`/repository/${listItem.id}`);
      }}
    >
      <View style={styles.container}>
        <Image
          source={{ uri: displayedItem?.ownerAvatarUrl }}
          style={styles.avatarImg}
        />
        <View
          style={[
            styles.containerColumn,
            { width: useWindowDimensions().width - 50 },
          ]}
        >
          <Text fontSize={"title"} fontWeight="bold">
            {displayedItem?.fullName}
          </Text>
          <Text fontSize={"subheading"}>{displayedItem?.description}</Text>
          <View style={styles.descriptionItem}>
            <Text style={styles.descriptionItemText}>
              {displayedItem?.language}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={[
          styles.container,
          ,
          { flexWrap: "wrap", justifyContent: "space-evenly" },
        ]}
      >
        <View>
          <Text
            fontWeight="bold"
            fontSize={"subheading"}
            style={styles.centeredText}
          >
            {displayedItem?.stargazersCount}
          </Text>
          <Text style={styles.centeredText} fontSize={"subheading"}>
            Stars
          </Text>
        </View>
        <View>
          <Text
            fontWeight="bold"
            fontSize={"subheading"}
            style={styles.centeredText}
          >
            {displayedItem?.forksCount}
          </Text>
          <Text fontSize={"subheading"} style={styles.centeredText}>
            Forks
          </Text>
        </View>
        <View>
          <Text
            fontSize={"subheading"}
            fontWeight="bold"
            style={styles.centeredText}
          >
            {displayedItem?.reviewCount}
          </Text>
          <Text fontSize={"subheading"} style={styles.centeredText}>
            Reviews
          </Text>
        </View>
        <View>
          <Text
            fontSize={"subheading"}
            fontWeight="bold"
            style={styles.centeredText}
          >
            {displayedItem?.ratingAverage}
          </Text>
          <Text fontSize={"subheading"} style={styles.centeredText}>
            Rating
          </Text>
        </View>
      </View>

      {singleView && (
        <>
          <Pressable
            style={buttonStyles.submitButton}
            onPress={() => Linking.openURL(displayedItem.url)}
          >
            <Text style={{ color: theme.colors.white }}>Open in GitHub</Text>
          </Pressable>
        </>
      )}
    </Pressable>
  );
};
