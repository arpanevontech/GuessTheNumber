import { TextInput, Button, View, Text, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../Ui/PrimaryButton";
import { useState } from "react";
import { COLORS } from "../assets/Theme";
import Title from "../Ui/Title";
import Card from "../Ui/Card";
import InstructionText from "../Ui/InstructionText";

function StartGameScreen({ onPickNumber }) {
  const [enterNumber, SetEnteredNumber] = useState("");

  function numberInputHandler(enterText) {
    SetEnteredNumber(enterText);
  }

  function confirmInputHandler() {
    const chooseNumber = parseInt(enterNumber);

    if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
      //show alert
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }

    onPickNumber(chooseNumber);
  }

  function resetInputHandler() {
    SetEnteredNumber("");
  }

  return (
    <View style={styles.rootContainer}>
      <Title> Guess The Number</Title>
      <Card>
        <View style={{ alignItems: "center", marginBottom: 10 }}>
         <InstructionText>Enter a Number</InstructionText>

          <TextInput
            style={styles.NumberInput}
            maxLength={2}
            keyboardType="number-pad"
            onChangeText={numberInputHandler}
            value={enterNumber}
          />
        </View>

        <View style={styles.btnContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>
              {" "}
              CONFIRM{" "}
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}> RESET </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
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
  NumberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: COLORS.accent500,
    borderBottomWidth: 2,
    color: COLORS.accent500,
    fontWeight: "bold",
    textAlign: "center",
  },

  btnContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },

  instructionText: {
    color: COLORS.primary500,
  },
});
