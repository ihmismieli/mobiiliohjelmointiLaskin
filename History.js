import { Text, FlatList, View, StyleSheet } from 'react-native';

export default function History({ route }) {

    const { results } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>History</Text>
            <FlatList
                data={results}
                style={styles.listItem}
                renderItem={({ item }) => (
                    <View>
                        <Text style={styles.text}>{item}</Text>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    text: {
        fontSize: 20,
    },
    title: {
        fontSize: 22,
        margin: 20,
    }
});