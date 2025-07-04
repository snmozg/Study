import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface BottomBarProps {
  currentTab: string;
  onTabPress: (tab: string) => void;
}

export default function BottomBar({ currentTab, onTabPress }: BottomBarProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[styles.tab, currentTab === 'home' && styles.activeTab]}
        onPress={() => onTabPress('home')}
      >
        <Text style={[styles.tabIcon, currentTab === 'home' && styles.activeIcon]}>🏠</Text>
        <Text style={[styles.tabText, currentTab === 'home' && styles.activeText]}>Ana Sayfa</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.tab, currentTab === 'explore' && styles.activeTab]}
        onPress={() => onTabPress('explore')}
      >
        <Text style={[styles.tabIcon, currentTab === 'explore' && styles.activeIcon]}>🔍</Text>
        <Text style={[styles.tabText, currentTab === 'explore' && styles.activeText]}>Keşfet</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.tab, currentTab === 'profile' && styles.activeTab]}
        onPress={() => onTabPress('profile')}
      >
        <Text style={[styles.tabIcon, currentTab === 'profile' && styles.activeIcon]}>👤</Text>
        <Text style={[styles.tabText, currentTab === 'profile' && styles.activeText]}>Profil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingBottom: 20,
    paddingTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 5,
  },
  activeTab: {
    backgroundColor: '#e3f2fd',
    borderRadius: 10,
    marginHorizontal: 5,
  },
  tabIcon: {
    fontSize: 24,
    marginBottom: 5,
  },
  activeIcon: {
    transform: [{ scale: 1.1 }],
  },
  tabText: {
    fontSize: 12,
    color: '#7f8c8d',
    fontWeight: '500',
  },
  activeText: {
    color: '#3498db',
    fontWeight: 'bold',
  },
});
