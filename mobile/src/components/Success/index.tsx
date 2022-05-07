import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import { Copyright } from "../Copyright";
import { styles } from "./styles";
import successImg from "../../assets/success.png";

interface IProps {
  onResetFeedback: () => void;
}

export function Success({ onResetFeedback }: IProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={successImg} />

      <Text style={styles.title}>Agradecemos o feedback!</Text>

      <TouchableOpacity style={styles.button} onPress={onResetFeedback}>
        <Text style={styles.buttonTitle}>Quero enviar outro</Text>
      </TouchableOpacity>

      <Copyright />
    </View>
  );
}
