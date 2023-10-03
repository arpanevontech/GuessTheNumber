import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../assets/Theme";

export default function InstructionText({children,style}) {
  return (
    <View>
      <Text style={[styles.InstructoinText,style]}>
        {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({

    InstructoinText:{
        color:COLORS.accent500,
        fontSize:24,
        fontFamily:'open-sansBold',
    },
});
