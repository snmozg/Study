import { View, Text, StyleSheet, ScrollView } from 'react-native';
import TopBar from '../components/TopBar';

const tweets = [
  {
    id: 1,
    user: "Ahmet Yılmaz",
    username: "@ahmetyilmaz",
    content: "Bugün harika bir gün! React Native öğreniyorum 🚀",
    time: "2s"
  },
  {
    id: 2,
    user: "Zeynep Kaya",
    username: "@zeynepkaya",
    content: "Kodlama yapmak çok eğlenceli. Yeni projeler geliştiriyorum 💻",
    time: "5dk"
  },
  {
    id: 3,
    user: "Can Özdemir",
    username: "@canozdemir",
    content: "JavaScript'te yeni bir framework öğrendim. Expo gerçekten harika! 🎯",
    time: "10dk"
  },
  {
    id: 4,
    user: "Elif Demir",
    username: "@elifdemir",
    content: "Mobil uygulama geliştirme sürecinde çok şey öğreniyorum ✨",
    time: "15dk"
  },
  {
    id: 5,
    user: "Murat Şen",
    username: "@muratsen",
    content: "GitHub'da yeni repo oluşturdum. Open source projeler harika! 🌟",
    time: "20dk"
  }
];

export default function Explore() {
  return (
    <View style={styles.container}>
      <TopBar />
      <ScrollView style={styles.content}>
        {tweets.map((tweet) => (
          <View key={tweet.id} style={styles.tweetContainer}>
            <View style={styles.tweetHeader}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                  {tweet.user.charAt(0)}
                </Text>
              </View>
              <View style={styles.userInfo}>
                <Text style={styles.userName}>{tweet.user}</Text>
                <Text style={styles.userHandle}>{tweet.username}</Text>
              </View>
              <Text style={styles.time}>{tweet.time}</Text>
            </View>
            <Text style={styles.tweetContent}>{tweet.content}</Text>
          </View>
        ))}
      </ScrollView>
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
    padding: 10,
  },
  tweetContainer: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  tweetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  avatarText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#2c3e50',
  },
  userHandle: {
    color: '#7f8c8d',
    fontSize: 14,
  },
  time: {
    color: '#7f8c8d',
    fontSize: 12,
  },
  tweetContent: {
    fontSize: 16,
    lineHeight: 22,
    color: '#2c3e50',
  },
});
