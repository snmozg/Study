import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import TopBar from "../components/TopBar";

export default function Index() {
  const [sayi, setSayi] = useState(0);

  return (
    <View style={{ flex: 1 }}>
      <TopBar />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 48, marginBottom: 50 }}>{sayi}</Text>
        
        <TouchableOpacity 
          style={{ backgroundColor: "green", padding: 15, margin: 10, borderRadius: 10 }}
          onPress={() => setSayi(sayi + 1)}
        >
          <Text style={{ color: "white", fontSize: 20 }}>Artır</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={{ backgroundColor: "red", padding: 15, margin: 10, borderRadius: 10 }}
          onPress={() => setSayi(sayi - 1)}
        >
          <Text style={{ color: "white", fontSize: 20 }}>Azalt</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
