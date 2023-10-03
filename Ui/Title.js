import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../assets/Theme";

export default function Title({ children }) {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: COLORS.accent500,
    fontFamily: "open-sansBold",
    fontSize: 24,
    textAlign: "center",
    borderWidth: 2,
    borderColor: COLORS.white,
    padding: 12,
    color: "white",
   
  },
});
