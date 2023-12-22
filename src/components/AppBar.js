import { View, StyleSheet, Pressable, Text } from 'react-native';
import Constants from 'expo-constants';
import theme from './theme';

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        height: 80,
        backgroundColor: theme.colors.appBarPrimary
    },
    tabText: {
        color: theme.colors.white,
        fontSize: 24,
        marginTop: 42,
        marginLeft: 7,
        fontWeight: '600'
    }
});

const AppBar = () => {
    return <View style={styles.container}>
        <Pressable>
            <Text style={styles.tabText}>Repositories</Text>
        </Pressable>
    </View>;
};

export default AppBar;