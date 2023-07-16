import { StyleSheet, View, Dimensions } from 'react-native'

import Colors from '../../constants/colors'

function Card({ children }) {
  return <View style={styles.card}>{children}</View>
}

export default Card

const deviceWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginHorizontal: 24,
    marginTop: deviceWidth < 380 ? 18 : 36,
    backgroundColor: Colors.primary600,
    borderRadius: 8,
    elevation: 4, //android에서 shadow 넣는 방법
    alignItems: 'center',
    shadowColor: 'black', //shadowXXX -> iOS에서 shadow 넣는 방법
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    width: 300,
    maxWidth: '80%',
  },
})
