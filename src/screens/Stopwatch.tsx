import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";

type IntervalIdType = NodeJS.Timeout | null;

export const Stopwatch: React.FC = () => {
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<IntervalIdType>(null);

  useEffect(() => {
    if (seconds > 59) {
      setMinutes((prev) => prev + 1);
      setSeconds(0);
    }
    if (minutes > 59) {
      setMinutes(0);
      setSeconds(0);
    }
  }, [seconds, minutes]);

  const handleStart = (): void => {
    if (!isStarted) {
      const id = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
      setIntervalId(id);
      setIsStarted(true);
    }
  };

  const handlePause = (): void => {
    if (isStarted && intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
      setIsStarted(false);
    }
  };

  const handleStop = (): void => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    setIsStarted(false);
    setMinutes(0);
    setSeconds(0);
  };


  return (
    <View style={styles.container}>
    <View style= {styles.titleContainer}>
      <Text style={styles.title}>STOPWATCH</Text>
    </View>
      <View style={styles.timerContainer}>
        <Text style={styles.timer}>
          {minutes < 10 ? "0" + minutes : minutes}:
          {seconds < 10 ? "0" + seconds : seconds}
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button} onPress={handlePause}>
          <Text style={styles.btnText}> Pause </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.startButton} onPress={handleStart}>
          <Image style={styles.playIcon} source={require('./images/play.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleStop}>
          <Text style={styles.btnText}> Reset </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    justifyContent: "center",
    alignItems: "center",
  },

  titleContainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },

  title: {
    fontSize: 50,
    marginStart:20,
    color: "white",
  },

  timerContainer: {
    height: 400,
    width: 400,
    borderWidth: 30,
    borderRadius: 200,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#B1DDB8",
    marginVertical: 80,
    shadowColor: "black",
    elevation: 7,
  },

  timer: {
    textAlign: "center",
    fontSize: 100,
    color: "white",

  },
  
  btnContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },

  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222222",
    borderRadius: 10,
    marginVertical: 10,
    width: 150,
    height: 70,
    marginHorizontal: 20,
    shadowColor: "black",
    elevation: 5,
  },

  startButton: {
    backgroundColor: "#222222",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    width: 120,
    height: 120,
    shadowColor: "black",
    elevation: 5,
  },

  btnText: {
    color: "white",
    fontSize: 30,
    textAlignVertical: "center",
    includeFontPadding: false,
  },
  playIcon:{
    width:60,
    height:60,
    resizeMode:'contain'
  }
});
