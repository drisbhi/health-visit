import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TestChart from './PieChart';


const GroupComponent = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FFF', 'rgba(255, 117, 76, 0.09)']}
        start={{ x: 0.1, y: 0.5 }}
        end={{ x: 1, y: 1 }}
        locations={[0, 1]}
        style={styles.gradient}
      >
        <View style={styles.textContainer}>
        <TestChart/>
       </View>
       
      </LinearGradient>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    
    height: '73%',
      backgroundColor: '#FFF',
      shadowColor: '#FCEAEA',
      shadowOffset: {
        width: 0,
        height: -4,
      },
      shadowOpacity: 0.75,
      shadowRadius: 15,
      elevation: 5, // This is for Android devices (API level 21 and higher)
  },
  gradient: {
    flex: 1,
    
  },
  textContainer:{
    flex: 1,
    marginTop : '30%'
  },
  
  
});

export default GroupComponent;

