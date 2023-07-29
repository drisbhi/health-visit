import React from 'react'
import { View , Text, StyleSheet, Image} from 'react-native'

const HeaderComponent = ()=> {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.rowContainer}>
          <View style={styles.Imgcontainer}>
            <Image
              source={require('./assets/Images/arrow.png')}
              style={styles.image}
            />
          </View>
         <Text style={styles.payment}>Pay Full Amount</Text>
        </View>
        <View style={styles.needContainer}>
        <View>
            <Image
              source={require('./assets/Images/Vector.png')}
              style={styles.vectorContainer}
            />
          </View>
         <Text style={styles.needHelp}>Need help ?</Text>
        </View>
      </View>
        
    </View>
  )
}
export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: '100%', 
    height: 102 ,  
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 4 }, // For iOS shadow
    shadowOpacity: 0.1, // For iOS shadow
    elevation: 5,
  },
  box :{
   display : 'flex',
   flexDirection: 'row',
   justifyContent : 'space-between',
   marginTop : '15%',
   marginRight: '5%',
   marginLeft: '5%',
  },
  payment : {
    color: '#0F0B28', 
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600', 
    lineHeight: 24,
    marginRight : '15%' 
  
  },
  needHelp: {
    color: '#3F8CFF', 
    // textAlign: 'right',
    fontFamily: 'Inter',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '600', 
  },
  Imgcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom : 1,
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
  },
  rowContainer:{
    display : 'flex',
    flexDirection : 'row',
    
  },
  needContainer:{
    display : 'flex',
    flexDirection : 'row',
    marginTop: 5,
    
  },
  vectorContainer:{
    width: 14,
    height: 14,
    resizeMode: 'cover',
     marginTop : 1,
    marginRight : 5,
  }
  
});
