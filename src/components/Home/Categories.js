import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const Categories = ({ emoji, detailText }) => {
  return (
    <View>
      {detailText === 'All' || detailText === 'Lake'
      ?
      <TouchableOpacity> 
        <View style={[styles.container, {width: 100}]}>
          <View style={styles.emojiContainer}>
              <Image source={emoji} style={styles.image} />
          </View>

          <Text style={styles.detailText}>
              {detailText}
          </Text>
        </View>
      </TouchableOpacity>
      :
      <TouchableOpacity>
        <View style={styles.container}>
          <View style={styles.emojiContainer}>
              <Image source={emoji} style={styles.image} />
          </View>

          <Text style={styles.detailText}>
              {detailText}
          </Text>
        </View>
      </TouchableOpacity>
      }
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: "white",
        borderWidth: 1.5,
        borderColor: "#d3d3d3",
        left: -50,
        height: 60,
        width: 145,
        borderRadius: 15,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        top: 10
    },

    emojiContainer: {
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#eee',
    },

    image: {
        width: 20,
        height: 20,
    },

    detailText: {
        fontSize: 15,
        fontFamily: 'reost-medium',
        color: 'black'
    }
})