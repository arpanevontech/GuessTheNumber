import { Button, StyleSheet, Text, View,Alert,Image, Dimensions } from "react-native";
import React from "react";
import PrimaryButton from "../Ui/PrimaryButton";
import Title from "../Ui/Title";
import { COLORS, FONTSIZE } from "../assets/Theme";


export default function GameOverScreen({ roundNumber ,userNumber ,restartHandler}) {

    
  

  return (
    <View style={styles.container}>

   <Title>Game Over!</Title>
   <View style={styles.imageContainer}>
   <Image source={require('../assets/Images/won.jpg')}
   resizeMode="cover"
   style={styles.imageArea}
   />
   </View>

   <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlightText}>{roundNumber} </Text>
   round to the guess number <Text style={styles.highlightText}>{userNumber}</Text></Text>

 
   <View style={{marginTop:20,marginLeft:10,marginRight:10}}>
   <PrimaryButton onPress={restartHandler}> START NEW GAME</PrimaryButton>
   </View>


    </View>
  );
}


const deviceWidth = Dimensions.get('window').width; 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:24,
    justifyContent: "center",
    alignItems:'center'
  },

  text: {
    color: "white",
    fontFamily: "serif",
    fontSize: 20,
    textAlign: "center",
  },

  guess:{
    marginTop:12,
    color: "white",
    fontFamily: "serif",
    fontSize: 50,
    textAlign: "center",
  },

  main:{
    borderRadius:5,
    borderColor:'#ddb52f',
    borderWidth:4,
    marginHorizontal:15,
    paddingVertical:15,

  },
  imageContainer:{
    borderRadius:150,
    width:deviceWidth < 380 ?150 : 300,
    height:deviceWidth <380 ? 150 : 300,
    borderWidth:3,
    borderColor:COLORS.gray,
    overflow:'hidden',
    margin:36
  },

  imageArea:{
    width:'100%',
    height:'100%'
  },

  summaryText:{
    fontFamily:'open-sansRegular',
    color:COLORS.secondary,
    fontSize:FONTSIZE.extraLarge,
    textAlign:'center',
    marginVertical:24
  },
  highlightText:{
    fontFamily:'open-sansBold',
    color:COLORS.primary500,
    fontSize:FONTSIZE.large,
  },
});
