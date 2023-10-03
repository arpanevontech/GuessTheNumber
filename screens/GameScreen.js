import { View, StyleSheet, Alert, FlatList} from "react-native";
import { useState, useEffect } from "react";
import Title from "../Ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../Ui/PrimaryButton";
import Card from "../Ui/Card";
import InstructionText from "../Ui/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, FONTSIZE } from "../assets/Theme";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomNumber(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver ,restartHandler}) {
  //object de-structuring
  const initialGuess = generateRandomNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRound, setGuessRound] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRound.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    //direction hold => lower or greater

    let count = 0;

    console.log(direction);

    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie", "You Know This is Wrong....", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomNumber(1, 100, currentGuess);
    setCurrentGuess(newRndNumber);
    setGuessRound((prevGuessRound) => [newRndNumber, ...prevGuessRound]);
  }

  const guessRoundListLength = guessRound.length;

  return (
    <View style={styles.screen}>
      <Title style={styles.title}>Opponent's Guess </Title>
      <View style={{justifyContent:'center',alignItems:'center'}}>
      <NumberContainer>{currentGuess}</NumberContainer>
      </View>

      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower{" "}
        </InstructionText>
        <View style={{ flexDirection: "column", padding: 2 }}>
          <View style={styles.btnContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={18} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.btnContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={18} color="white" />
            </PrimaryButton>
          </View>
         
        </View>
        <View style={{marginTop:20,marginLeft:10,marginRight:10}}>
        <PrimaryButton onPress={restartHandler}> Reset Number</PrimaryButton>
        </View>

      
      </Card>

      <View style={styles.countScreen}>
      
      

      <FlatList data={guessRound} renderItem={(itemData) => <GuessLogItem roundNumber={guessRoundListLength - itemData.index} guess={itemData.item}/> } 
      keyExtractor={(item)=> item.index}/>
       
        </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    marginTop: 25,
  },

  btnContainer: {
    width: 70,
  },

  countScreen: {
    justifyContent:'center',
    flex:1,
    padding:15
  },

  instructionText: {
    marginBottom: 12,
  },

  guessStyle: {
    fontFamily: "open-sansBold",
    color: COLORS.primary500,
    fontSize: FONTSIZE.large,
    
   
  },
});
