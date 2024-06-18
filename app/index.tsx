import { router } from "expo-router";
import { usePreventScreenCapture } from "expo-screen-capture";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Page() {

  usePreventScreenCapture();

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Não permitimos Capturas de Tela</Text>
        <Text style={styles.subtitle}>Caso deseje realizar capturas de tela, clique no botão abaixo.</Text>
        <Button title="Teste" onPress={() => router.push('home')}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
