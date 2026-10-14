import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  function iniciarAplicacao() {
    console.log("Botão pressionado");
  }
  return (
    
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.card}>
        
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
          />
        <Text style={styles.titulo}>TaskFlow</Text>
        <Text style={styles.descricao}>
          Organize suas tarefas de forma simples.
        </Text>
        <Pressable 
          style={styles.botao}
          onPress={iniciarAplicacao}
         >   
          <Text style={styles.textoBotao}>
            Começar
          </Text>
         </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#F3F4F6",
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20
    
  },
  titulo: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#2563EB",
    marginBottom:10
  },
  descricao: {
    fontSize: 18,
    textAlign: "center",
    lineHeight:26,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 30,
    borderRadius: 20,
    alignItems: "center",
  },
  botao:{
    backgroundColor:"#2563EB",
    paddingVertical:15,
    paddingHorizontal:40,
    borderRadius:10,
  },
  textoBotao:{
    color:"#FFF",
    fontWeight: "bold",
    fontSize:18
  }
});