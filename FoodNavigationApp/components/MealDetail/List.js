import { View, Text, StyleSheet } from 'react-native'

function List({ data }) {
  return data.map(dataPoint => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ))
}
export default List

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    margin: 8,
    padding: 8,
    backgroundColor: '#526D82',
  },
  itemText: {
    color: '#DDE6ED',
    textAlign: 'center',
  },
})
