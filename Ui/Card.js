import { StyleSheet, View } from 'react-native'
import { COLORS } from '../assets/Theme'

export default function Card({children}) {
    return(

        <View style={styles.inputConteainer}>
        {children}
       </View>
    )
     
     
}

const styles = StyleSheet.create({
    inputConteainer: {
        padding: 16,
        marginTop: 36,
        backgroundColor: COLORS.primary700,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 14,
        shadowColor: "black",
        textShadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        alignItems: "center",
        justifyContent: "center",
      },
})