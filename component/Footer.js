import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#FEFEFE',
    elevation: 2, // Use elevation to create a shadow effect
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    height : 108,
  },
  button: {
    borderRadius: 8, // Border radius of 8 units
    backgroundColor: '#714FFF',
    flexDirection: 'row', // For inline-like behavior
    alignItems: 'center', // To center items vertically
    justifyContent: 'center', // To center items horizontally
    paddingVertical: 14, // Equivalent to padding: 14px 0;
    paddingHorizontal: 125, // Horizontal padding can be applied separately
    marginVertical: 10, // Equivalent to gap: 10px;
    backgroundColor: '#714FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
    width : '90%',
    marginLeft : '5%',
    marginTop : '8%',
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 16,
  },
});

export default Footer;
