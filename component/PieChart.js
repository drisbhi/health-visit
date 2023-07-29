import React, { Component } from 'react'
import { StyleSheet, ScrollView, Text, View } from 'react-native'
import PieChart from 'react-native-pie-chart'

export default class TestChart extends Component {
  render() {
    const widthAndHeight = 250
    const series = [240, 50, 300,]
    const sliceColor = ['#714FFF', '#FF754C', '#FCEAEA']

    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.text}>2 Instalments are Pending</Text>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            coverRadius={0.95}
            // coverFill= {['#FFF', 'rgba(255, 117, 76, 0.01)']}
            showPercentage
            innerRadius={50} 
            
          />
         
        </View>
        <View style={styles.pieData}>
            <Text style={styles.madatetext}>E-mandate Skipped</Text>
            <Text style={styles.numbertext}>₹ 40,000</Text>
          </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    position : 'relative'
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24, // 150% of 16px (rounded to 24)
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    color: '#FF754C', 
    marginBottom : '10%'
  },
  madatetext: {
    color: '#A5A6BB',
    fontFamily: 'Montserrat',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 15,
    letterSpacing: 1,
    textTransform: 'uppercase',
    includeFontPadding: false, // To disable extra top and bottom padding on Android
  }, 
   numbertext: {
    color: '#FF754C',
    fontFamily: 'Inter',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 36, // 150% of 24px (rounded to 36)
    letterSpacing: 0.5,
    textTransform: 'uppercase',
   marginLeft : '4%'
  },
  pieData:{

    bottom: '40%' ,
    marginLeft : '35%'
  }
})