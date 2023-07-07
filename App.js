import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>올 여름 펜타포트!!!</Text>
      <Text style={styles.dummyText}>타임 테이블 앱 만들어보자고!!!</Text>
      <Button title='@fstval.life' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    margin: 16,
    padding: 5,
    borderWidth: 2,
    borderColor: 'green'
  }
});
