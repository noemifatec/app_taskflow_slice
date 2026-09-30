import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Home() {
  return (
    <SafeAreaView style={{ flex:1}}>
      <View>
        <Text style={styles.titulo}>TaskFlow</Text>

        <Text style={styles.descricao}>
          Organize suas tarefas de forma simples.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  titulo:{
    fontSize:32,
    fontWeight:"bold",
    color:"#2563EB"
  },
  descricao:{
    fontSize:18,
    textAlign:"center",
    marginTop:15
  }
})
