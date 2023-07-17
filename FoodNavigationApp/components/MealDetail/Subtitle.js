import { View, Text, StyleSheet } from 'react-native'

function SubTitle({ children }) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  )
}

export default SubTitle

const styles = StyleSheet.create({
  subTitle: {
    color: '#526D82',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitleContainer: {
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 6,
    borderBottomColor: '#526D82',
    borderBottomWidth: 2,
  },
})
