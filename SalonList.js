/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type { Node } from 'react';
 import Carousel from 'react-native-snap-carousel';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   TextInput,
   Image,
   Dimensions
 } from 'react-native';
 
 import {
   Colors,
 
 } from 'react-native/Libraries/NewAppScreen';
 
 
 export default class SalonList extends React.Component {
   constructor(props){
     super(props);
     this.state = {
       activeIndex:0,
       carouselItems: [
       {
           title:require('./img/ic_cs_new.jpg'),
           text: "Text 1",
       },
       {
           title:require('./img/ic_finance.jpg'),
           text: "Text 2",
       },
       {
           title:require('./img/ic_fund.jpg'),
           text: "Text 3",
       },
      
     ]
   }
 }
  
 
   render() {
  
 
   const backgroundStyle = {
     backgroundColor: "#fff",
   };
 
   return (
     <SafeAreaView style={backgroundStyle}>
       <StatusBar  backgroundColor='#000' barStyle={'dark-content'} />
       <ScrollView
         contentInsetAdjustmentBehavior="automatic"
         style={backgroundStyle}>



       <Image resizeMode={'cover'} source={require('./img/salon_home.jpg')}
            style={{ width:Dimensions.get('window').width,height:200 , marginTop: 5 }}
          />
 
 <Text style={{
              fontSize: 20,
              marginTop: 5,
             
              marginStart:20,
              fontWeight: "bold",
              color: Colors.black,
            }}>Salon at Home</Text>

<Text style={{
              fontSize: 16,
              marginTop: 5,
            
              marginStart:20,
              fontWeight: "bold",
              color: "#808080",
            }}>Select your preference</Text>
 
 <View style={{
          flexDirection: 'row',
          backgroundColor: Colors.white,
          marginTop:10
        }}>

<Text style={{
              fontSize: 20,
              
             
              marginStart:20,
              fontWeight: "bold",
              color: Colors.black,
            }}>Luxe</Text>
   <Image source={require('./img/ic_next.png')}
            style={{ width: 17, height: 17, marginStart: 15 ,tintColor:"#000080",alignSelf:"center"}}
          />

<Text style={{
              fontSize: 20,
              
              marginLeft: 'auto',
              marginEnd:20,
              marginStart:20,
              fontWeight: "bold",
              color: Colors.black,
            }}>₹799</Text>

        </View>
        <View style={{
          flexDirection: 'row',
          backgroundColor: Colors.white,
          marginTop:10
        }}>

<Text style={{
              fontSize: 16,
              
             
              marginStart:20,
              fontWeight: "bold",
              color: "#333",
            }}>Luxury expiernce, high-and brands</Text>
 

<Text style={{
              fontSize: 16,
              
              marginLeft: 'auto',
              marginEnd:20,
              marginStart:20,
              fontWeight: "bold",
              color: "#333",
            }}>onwards</Text>

        </View>
        <View style={{
          flexDirection: 'row',
          backgroundColor: Colors.white,
          marginTop:30
        }}>

<Text style={{
              fontSize: 20,
              
             
              marginStart:20,
              fontWeight: "bold",
              color: Colors.black,
            }}>Prime</Text>
   <Image source={require('./img/ic_next.png')}
            style={{ width: 17, height: 17, marginStart: 15 ,tintColor:"#000080",alignSelf:"center"}}
          />

<Text style={{
              fontSize: 20,
              
              marginLeft: 'auto',
              marginEnd:20,
              marginStart:20,
              fontWeight: "bold",
              color: Colors.black,
            }}>₹599</Text>

        </View>
        <View style={{
          flexDirection: 'row',
          backgroundColor: Colors.white,
          marginTop:10
        }}>

<Text style={{
              fontSize: 16,
              
             
              marginStart:20,
              fontWeight: "bold",
              color: "#333",
            }}>Premier expiernce and brands</Text>
 

<Text style={{
              fontSize: 16,
              
              marginLeft: 'auto',
              marginEnd:20,
              marginStart:20,
              fontWeight: "bold",
              color: "#333",
            }}>onwards</Text>

        </View>
        <View style={{
          flexDirection: 'row',
          backgroundColor: Colors.white,
          marginTop:30
        }}>

<Text style={{
              fontSize: 20,
              
             
              marginStart:20,
              fontWeight: "bold",
              color: Colors.black,
            }}>Classic</Text>
   <Image source={require('./img/ic_next.png')}
            style={{ width: 17, height: 17, marginStart: 15 ,tintColor:"#000080",alignSelf:"center"}}
          />

<Text style={{
              fontSize: 20,
              
              marginLeft: 'auto',
              marginEnd:20,
              marginStart:20,
              fontWeight: "bold",
              color: Colors.black,
            }}>₹349</Text>

        </View>
        <View style={{
          flexDirection: 'row',
          backgroundColor: Colors.white,
          marginTop:10
        }}>

<Text style={{
              fontSize: 16,
              
             
              marginStart:20,
              fontWeight: "bold",
              color: "#333",
            }}>Professional experience,{"\n"}affordable brands</Text>
 

<Text style={{
              fontSize: 16,
              
              marginLeft: 'auto',
              marginEnd:20,
              marginStart:20,
              fontWeight: "bold",
              color: "#333",
            }}>onwards</Text>

        </View>
        <View style={{
          flexDirection: 'row',
          backgroundColor: Colors.white,
          marginTop:30
         
        }}>

<Text style={{
              fontSize: 20,
              
             
              marginStart:20,
              fontWeight: "bold",
              color: Colors.black,
            }}>Hair services for women</Text>
   <Image source={require('./img/ic_next.png')}
            style={{ width: 17, height: 17, marginStart: 15 ,tintColor:"#000080",alignSelf:"center"}}
          />

<Text style={{
              fontSize: 20,
              
              marginLeft: 'auto',
              marginEnd:20,
              marginStart:20,
              fontWeight: "bold",
              color: Colors.black,
            }}>₹349</Text>

        </View>
        <View style={{
          flexDirection: 'row',
          backgroundColor: Colors.white,
          marginTop:10,
          marginBottom:30
        }}>

<Text style={{
              fontSize: 16,
              
             
              marginStart:20,
              fontWeight: "bold",
              color: "#333",
            }}>Expert hair stylists</Text>
 

<Text style={{
              fontSize: 16,
              
              marginLeft: 'auto',
              marginEnd:20,
              marginStart:20,
              fontWeight: "bold",
              color: "#333",
            }}>onwards</Text>

        </View>
       </ScrollView>
     </SafeAreaView>
   );
 };
 }
 const styles = StyleSheet.create({
   searchSection: {
     flex: 1,
     flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center',
     margin: 10,
     padding: 5,
     backgroundColor: '#fff',
   },
   searchIcon: {
     padding: 10,
   },
   input: {
     flex: 1,
     paddingTop: 10,
     paddingRight: 10,
     paddingBottom: 10,
     paddingLeft: 0,
     backgroundColor: '#fff',
     color: '#424242',
   },
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 
 