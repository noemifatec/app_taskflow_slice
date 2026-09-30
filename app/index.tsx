import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  return (
    
    <SafeAreaView>
      <View style={styles.container}>
        
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
          />
          <Text style={styles.titulo}>TaskFlow</Text>
        <Text style={styles.descricao}>
          Organize suas tarefas de forma simples.
        </Text>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 140,
    height: 140,
    
  },
  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2563EB",
  },
  descricao: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 15,
  },
});