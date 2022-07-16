import { StyleSheet, Text, TextInput, View, Dimensions } from 'react-native';
import React from 'react';

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;

const SignupInfo = ({ infoTitle, placeholder, autoComplete}) => {
  return (
    <View style={{ marginTop: 10, marginVertical: 30 }}>
      <Text style={styles.text}> {infoTitle} </Text>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        autoComplete={autoComplete}
        secureTextEntry={infoTitle === 'Password' ? true : false}
      />
    </View>
  )
}

export default SignupInfo

const styles = StyleSheet.create({
    text: {
        fontFamily: 'reost-semibold',
        fontSize: 18,
        color: 'white',
    },

    input: {
        borderColor: 'white',
        borderWidth: 1.5,
        width: 0.9 * SCREENWIDTH,
        height: 0.08 * SCREENHEIGHT,
        padding: 10,
        color: 'white',
        fontFamily: 'reost-medium',
        fontSize: 15,
        backgroundColor: 'black',
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
    }
})