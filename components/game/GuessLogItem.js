import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTSIZE } from '../../assets/Theme'

export default function GuessLogItem({roundNumber, guess}) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemTextStyle}>#{roundNumber} </Text>
      <Text style={styles.itemTextStyle}>Opponent's Guess : {guess}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

    listItem:{
        borderColor:COLORS.primary800,
        borderWidth:1,
        borderRadius:40,
        padding:12,
        marginVertical:8,
        backgroundColor:COLORS.accent500,
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        elevation:4,
        shadowColor:'black',
        shadowOffset:{width:0,height:0},
        shadowOpacity:0.25,
        shadowRadius:3
    },

    itemTextStyle:{
        fontFamily:'open-sansRegular',
        fontSize:FONTSIZE.medium
    }

})