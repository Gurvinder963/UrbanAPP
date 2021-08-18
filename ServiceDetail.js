/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import YoutubePlayer from 'react-native-youtube-iframe';
 import LinearGradient from 'react-native-linear-gradient';
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
 
 
 export default class ServiceDetail extends React.Component {
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
<View  style={{alignItems:"center" }}>
<Image resizeMode={'contain'} source={require('./img/uc_company.png')}
            style={{ width:300,height:100 , marginTop: 30 }}
          />
<Text style={{
              fontSize: 24,
              marginTop: 10,
             
              marginStart:20,
              fontWeight: "bold",
              color: "#44d62c",
            }}>Disinfection Services</Text>


<Text style={{
              fontSize: 16,
              marginTop: 15,
              paddingEnd:8,
              borderRadius:6,
              paddingTop:2,
              paddingBottom:2,
              paddingLeft:8,
             backgroundColor:"#000",
              marginStart:20,
              fontWeight: "bold",
              color: "#fff",
            }}>Book Now</Text>

</View>  


<LinearGradient
          colors={['white', 'black' ]}
          style={{ height:150,justifyContent:"center",alignItems:'center'}}
        >

            <View style={{
              height:1,
              marginEnd:40,
              marginStart:40,
              color: "#000",
            }}></View>
       <Text style={{
              fontSize: 24,
              marginTop: 10,
             
              marginStart:20,
              fontWeight: "bold",
              color: "#fff",
            }}>Catogorized Services</Text>
        </LinearGradient>
        <Text style={{
              fontSize: 20,
              marginTop: 15,
             
              marginStart:20,
              fontWeight: "bold",
              color: Colors.black,
            }}>Select your Service</Text>
  <View
          style={{
            height: 1,
            marginTop:20,
            backgroundColor: "#c3c3c3"
          }}
        ></View>
        <View style={{
          flexDirection: 'row',
          backgroundColor: Colors.white,
        }}>

          <View style={{

            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Image source={require('./img/ic_home_dis.jpeg')}
              style={{ width: 50, height: 50 ,  borderRadius: 50 / 2,
                overflow: "hidden",}}
            />

            <Text style={{
              fontSize: 12,
              marginTop: 5,
              textAlign: 'center',

              color: Colors.black,
            }}>Home Disinfection</Text>

          </View>

          <View
            style={{
              width: 1, height: 90,
              backgroundColor: "#c3c3c3"
            }}
          ></View>

          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Image source={require('./img/ic_shop_dis.jpg')}
              style={{ width: 50, height: 50,  borderRadius: 50 / 2,
                overflow: "hidden", }}
            />

            <Text style={{
              fontSize: 12,
              marginTop: 5,

              textAlign: 'center',
              color: Colors.black,
            }}>Shops Disinfection</Text>

          </View>
          <View
            style={{
              width: 1, height: 90,
              backgroundColor: "#c3c3c3"
            }}
          ></View>
          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Image source={require('./img/ic_car_dis.jpg')}
              style={{ width: 40, height: 40 ,  borderRadius: 50 / 2,
                overflow: "hidden",}}
            />

            <Text style={{
              fontSize: 12,
              marginTop: 5,

              textAlign: 'center',
              color: Colors.black,
            }}>Car Disinfection</Text>

          </View>
         
          </View>
          <View
          style={{
            height: 1,
          
            backgroundColor: "#c3c3c3"
          }}
        ></View>
          <View
          style={{
            height: 10,
            backgroundColor: "#c9c9c9"
          }}
        ></View>
       
         <Text style={{
              fontSize: 20,
              marginTop: 15,
             
              marginStart:20,
              fontWeight: "bold",
              color: Colors.black,
            }}>How its Done</Text>
              <View style={{
              marginEnd:10,
              marginTop: 15,
             
              marginStart:10,
             
            }}>
      <YoutubePlayer 
        height={300}
        play={false}
        videoId={"JnVDUMBKCSw"}
      />
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
 
 
 