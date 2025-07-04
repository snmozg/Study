import { View, Text, StyleSheet } from 'react-native';
import TopBar from '../components/TopBar';

export default function Profile() {
  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.content}>
        <View style={styles.profileIcon}>
          <Text style={styles.iconText}>👤</Text>
        </View>
        <Text style={styles.profileName}>Kullanıcı Adı</Text>
        <Text style={styles.profileInfo}>Bu profil sayfasıdır</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profileIcon: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconText: {
    fontSize: 60,
    color: 'white',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  profileInfo: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
  },
});
