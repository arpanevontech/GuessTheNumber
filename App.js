import StartGameScreen from "./screens/StartGameScreen";
import { StyleSheet, View, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import { COLORS } from "./assets/Theme";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";

SplashScreen.preventAutoHideAsync().catch(console.warn); 

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRound, setguessRound] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sansRegular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sansBold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading
     />;
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setguessRound(numberOfRounds);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} restartHandler={restartHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundNumber={guessRound}
        restartHandler={restartHandler}
      />
    );
  }

  function restartHandler() {
    // console.log("Restart Button  pressed ");
    setUserNumber(null);
    setguessRound(0);
  }

  return (

    <>
    <StatusBar  style="light"/>
    <LinearGradient
      colors={[COLORS.primary800, COLORS.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/Images/dice.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.bgImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },

  bgImage: {
    opacity: 0.15,
  },
});
