import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text, Pressable, Keyboard, Button } from 'react-native';

export default function Calculator({ navigation }){
const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");

  const [result, setResult] = useState("");

  const [results, setResults] = useState([]);

  const num1 = parseFloat(number1);
  const num2 = parseFloat(number2);

  const handleCalculation = (operation) => {
    Keyboard.dismiss()
    if (!isNaN(num1) && !isNaN(num2)){
      const operations = {
        "+" : num1 + num2,
        "-" : num1 - num2,
        "*" : num1 * num2,
        "/" : num2 !== 0 ? num1 / num2 : alert("Cannot divide by zero!"),
      };

      const calculationResult = operations[operation];

      if(calculationResult !== undefined){
        setResult(calculationResult);
        const newResult = `${number1} ${operation} ${number2} = ${calculationResult}`
        setResults([...results, newResult]);
      }
    } else {
      alert("Enter valid numbers in both fields!")
    }
    setNumber1("");
    setNumber2("");
  };
  
  const handleCancel = () => {
    setResult("");
    setNumber1("");
    setNumber2("");
  }

    return(

        <View style={styles.view}>
            {result !== "" && (
                    <View style={styles.result}>
                      <Text style={styles.text}>Result: {result}</Text>
                    </View>
                  )}
                  <TextInput
                    placeholder='Enter a number'
                    keyboardType='numeric'
                    value={number1}
                    onChangeText={number => setNumber1(number)}
                    style={styles.input}
                  />
                  <TextInput
                    placeholder='Enter a number'
                    keyboardType='numeric'
                    value={number2}
                    onChangeText={number => setNumber2(number)}
                    style={styles.input}
                  />
                  <View style={styles.buttons}>
                    <Pressable style={styles.button} onPress={() => handleCalculation("+")}>
                      <Text style={styles.text}>+</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={() => handleCalculation("-")}>
                      <Text style={styles.text}>-</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={() => handleCalculation("*")}>
                      <Text style={styles.text}>*</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={() => handleCalculation("/")}>
                      <Text style={styles.text}>/</Text>
                    </Pressable>
                  </View>
                  <View>
                  <Pressable style={styles.buttonCancel} onPress={handleCancel}>
                      <Text style={styles.textCancel}>C</Text>
                    </Pressable>
                  </View>
                  <Pressable
                   title="History"
                   style={styles.historyButton}
                   onPress={() => navigation.navigate('History', { results })}
                  >
                    <Text style={styles.historyText}>History</Text>
                  </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    input: {
      textAlign: 'center',
      borderColor: '#BAA898',
      fontSize: 18,
      borderWidth: 2,
      margin: 10,
      width: '50%',
      borderRadius: 20,
    },
  
    buttons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '70%',
      marginTop: '50',
      gap: 10,
    },
  
    button: {
      backgroundColor: '#EEE0CB',
      width: 60,
      height: 60,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#BAA898',
      borderWidth: 3,
    },
    historyButton: {
        textAlign: 'center',
        borderColor: '#BAA898',
        backgroundColor: '#EEE0CB',
        borderWidth: 2,
        paddingLeft:50,
        paddingRight:50,
        padding: 10,
        borderRadius: 20,
    },
    historyText: {
        fontSize:22,
    },
  
    textCancel: {
      color: '#EEE0CB',
      fontWeight: 'bold',
      fontSize: 24,
    },
  
    buttonCancel: {
      backgroundColor: '#BAA898',
      width: 60,
      height: 60,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40, 
      marginBottom: 30,
    },
  
    result: {
      marginBottom: 30,
      marginTop:10,
      backgroundColor: '#BAA898',
      padding: 20,
      borderRadius: 50,
    },
  
    text: {
      fontSize: 20,
      fontWeight: 'bold'
    },
    textHistory: {
      fontSize: 22,
      marginBottom: 10,
    }
  });
  