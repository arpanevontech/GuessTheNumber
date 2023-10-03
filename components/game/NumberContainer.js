import { StyleSheet, Text, View, Dimensions } from "react-native";
import { COLORS } from "../../assets/Theme";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

  const deviceWidth = Dimensions.get('window').width; 

const styles = StyleSheet.create({


  container: {
    borderWidth:4,
    borderColor:COLORS.accent500,
    padding:deviceWidth < 380 ? 12 : 24,
    borderRadius:8,
    margin:24,
    maxWidth:'80%',
    width:100,
    height:120,
    alignContent:'center',
    justifyContent:'center'
    
  },

  numberText: {

    color:COLORS.accent500,
    fontSize:36,
    fontWeight:'bold',
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center'
  },
});
