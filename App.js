import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { TextField } from './src/components/text-field';

import { countSmsAmount } from './src/functions/countSmsAmount';

export default function App() {

  const [ text, setText ] = useState('');
  const [ symCount, setSymCount ] = useState(0);
  const [ smsUI, setSmsUI ] = useState('');

  const onPress = () => {
    const res = countSmsAmount(text, symCount);
    setSmsUI(res);
  };

  const updateText = text => setText(text);
  const updateSymCount = symCount => setSymCount(symCount); 

  return (
    <ScrollView contentContainerStyle = {styles.container}>
      
      <TextField updateText={updateText} updateSymCount={updateSymCount} />

      <View style = {styles.buttonContainer}>

        <TouchableOpacity
          style={styles.button}
          onPress={onPress}
        >

          <Text style={styles.buttonText}>Порахувати кількіть SMS</Text>

        </TouchableOpacity>

        <Text style={styles.smsUI}>
          {smsUI}
        </Text>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCCCCC',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop:60
  },

  buttonContainer: {
    alignItems: 'center',
    marginTop: 30
  },

  button: {
    width: '80%',
    padding: 25,
    color: 'white',
    backgroundColor: '#4FCCFF',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#BBBBBB',
  },

  buttonText: {
    color: 'black', 
    fontSize: 20
  },

  smsUI: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    fontSize: 20
  },


});
