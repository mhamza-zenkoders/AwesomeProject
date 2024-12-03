import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
  } from "react-native";
  
export const HeroSection: React.FC=()=>{
    return (
        <View style={styles.hero}>
        <View 
        // style={styles.heroTextContainer}
        >
          <Text style={styles.heroText}>Manage Your</Text>
          <Text style={styles.heroText}>Tasks Here</Text>
        </View>
        <Image
          style={styles.heroImage}
          source={require("../../images/hero.png")}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    hero: {
      backgroundColor: "#B1DDB8",
      padding: 30,
      marginBottom:30,
      borderRadius: 20,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  
    heroText: {
      fontSize: 30,
      alignItems: "flex-start",
    },
  
    heroImage: {
      width: 100,
      height: 100,
      resizeMode: "contain",
      alignItems: "flex-end",
    },
  
  });
  
  