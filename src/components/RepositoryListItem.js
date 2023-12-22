import { Text, View } from "react-native";

export const RepositoryListItem = props => {
    const { listItem } = props;

    return (
        <View>
            <Text>{`Full name: ${listItem.fullName}`}</Text>
            <Text>{`Description: ${listItem.description}`}</Text>
            <Text>{`Language: ${listItem.language}`}</Text>
            <Text>{`Stars: ${listItem.stargazersCount}`}</Text>
            <Text>{`Forks: ${listItem.forksCount}`}</Text>
            <Text>{`Reviews: ${listItem.reviewCount}`}</Text>
            <Text>{`Ratings: ${listItem.ratingAverage}`}</Text>
        </View>
    );
};
