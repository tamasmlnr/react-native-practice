import { View, StyleSheet, Pressable, Text, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from './theme';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        height: 80,
        backgroundColor: theme.colors.appBarPrimary,
        display: 'flex',
        flexDirection: "row",
        paddingTop: 27
    },
    tabText: {
        color: theme.colors.white,
        fontSize: 24,
        marginLeft: 7,
        fontWeight: '600'
    }
});

const AppBar = () => {
    return <View style={styles.container}>
        <ScrollView horizontal>
            <Pressable>
                <Link to="/login">
                    <Text style={styles.tabText}>Login</Text>
                </Link>
            </Pressable>
            <Pressable>
                <Link to="/">
                    <Text style={styles.tabText}>Repositories</Text>
                </Link>
            </Pressable>
        </ScrollView>
    </View>;
};

export default AppBar;