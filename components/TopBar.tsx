import { View, Text, StyleSheet } from 'react-native';

export default function TopBar() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Hoşgeldin</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3498db',
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
