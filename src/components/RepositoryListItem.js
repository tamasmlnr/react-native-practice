import { View, StyleSheet, Image, useWindowDimensions } from "react-native";
import theme from "./theme";
import Text from "./Text"

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'row',
        backgroundColor: theme.colors.white,
        padding: 8
    },
    avatarImg: {
        height: 50,
        width: 50,
        borderRadius: 150
    },
    containerColumn: {
        display: "flex",
        flexDirection: "column",
        paddingLeft: 8,
        rowGap: 8,
        columnGap: 20
    },
    descriptionItem: {
        backgroundColor: theme.colors.blue,
        alignSelf: 'flex-start',
        padding: 4,
        borderRadius: 5
    },
    descriptionItemText: {
        color: theme.colors.white,
        fontSize: 18
    },
    centeredText: {
        textAlign: 'center'
    }
});

export const RepositoryListItem = props => {
    const { listItem } = props;

    return (
        <View>
            <View style={styles.container}>
                <Image source={{ uri: listItem.ownerAvatarUrl }} style={styles.avatarImg} />
                <View style={[styles.containerColumn, { width: useWindowDimensions().width - 50 }]}>
                    <Text fontSize={"title"} fontWeight="bold" >{listItem.fullName}</Text>
                    <Text fontSize={"subheading"}>{listItem.description}</Text>
                    <View style={styles.descriptionItem}><Text style={styles.descriptionItemText}>{listItem.language}</Text></View>
                </View>
            </View>

            <View style={[styles.container, , { flexWrap: "wrap", justifyContent: "space-evenly" }]}>
                <View>
                    <Text fontWeight="bold" fontSize={"subheading"} style={styles.centeredText}>{listItem.stargazersCount}</Text>
                    <Text style={styles.centeredText} fontSize={"subheading"}>Stars</Text>
                </View>
                <View>
                    <Text fontWeight="bold" fontSize={"subheading"} style={styles.centeredText}>{listItem.forksCount}</Text>
                    <Text fontSize={"subheading"} style={styles.centeredText}>Forks</Text>
                </View>
                <View>
                    <Text fontSize={"subheading"} fontWeight="bold" style={styles.centeredText}>{listItem.reviewCount}</Text>
                    <Text fontSize={"subheading"} style={styles.centeredText}>Reviews</Text>
                </View>
                <View>
                    <Text fontSize={"subheading"} fontWeight="bold" style={styles.centeredText}>{listItem.ratingAverage}</Text>
                    <Text fontSize={"subheading"} style={styles.centeredText}>Rating</Text>
                </View>
            </View>


        </View >
    );
};
