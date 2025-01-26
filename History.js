import { Text, FlatList, View, StyleSheet} from 'react-native';

export default function History({results}) {
    return (
        <FlatList 
            data={results}
            style={styles.listItem}
            renderItem={({item}) => (
                <View>
                    <Text style={styles.text}>{item}</Text>
                </View>
            )}
        />
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
    },
});