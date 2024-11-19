import { StyleSheet, Text, View, Button } from 'react-native';

export default function ButtonComponent({ toggleScrollList, toggleFlatList, toggleSectionList }) {
    
    return (
        <View style={styles.buttonsContainer}>
            <Button title='Scroll View List' onPress={toggleScrollList} />
            <Button title='Flat List' onPress={toggleFlatList} />
            <Button title='Section List' onPress={toggleSectionList} />
        </View>)
}
const styles = StyleSheet.create({

    buttonsContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        marginVertical: '15%',
        justifyContent: 'space-evenly',

    }

});