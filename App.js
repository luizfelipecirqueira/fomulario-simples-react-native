import React from "react";
import { View, Text, SafeAreaView, StyleSheet, TextInput } from "react-native";

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.titulo}>Formulário Simples com React-Native</Text>
      </View>
      <Text style={styles.texto}>Nome:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Text style={styles.texto}>Número:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  titulo:{
    fontSize: 18,
    margin: 38
  },
  texto:{
    fontSize: 14,
    margin: 12
  }
});

export default UselessTextInput;