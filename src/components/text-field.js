import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export const TextField = ({updateText, updateSymCount}) => {

    const [text, setText] = useState('');
    const [symNum, setSymNum] = useState(0);

    const onChangeText = (text) => {
        setText(text);
        updateText(text);
    }

    const onChangeSms = (symNum) => {
        const numberRes = +symNum;
        setSymNum(numberRes);
        updateSymCount(numberRes);
    }

    return (
        <View style={styles.container}>
            <TextInput 
            multiline
            returnKeyType="done"
            style = {styles.smsContainer}
            placeholder = "Напишіть ваше смс!"
            onChangeText = {onChangeText} 
            />

            <View style = {styles.symContainer}>
                <TextInput
                style={styles.symInput}
                maxLength={5}
                onChangeText = {onChangeSms} 
                />
                <Text style={styles.text}>
                    cимволів
                </Text>    
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent:'space-between',
        height:300,
        width: '90%',
        color: 'black',
        // backgroundColor: "orange",
    },
    smsContainer:{
        overflow: 'hidden',
        paddingBottom: 150,
        paddingHorizontal: 5,
        height: '70%',
        backgroundColor: "white",
        borderColor:'#BBBBBB',
        borderWidth: 2,
        fontSize: 16
    },

    symContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    symInput: {
        width: 90,
        height:70,
        backgroundColor: 'white',
        borderColor:'#BBBBBB',
        borderWidth: 2,
        paddingHorizontal: 5,
        fontSize: 24
    },
    text: {
        paddingHorizontal: 25,
        fontSize: 28    
    }
})