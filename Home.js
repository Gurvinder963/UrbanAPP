/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import { createFoodItem } from '../UrbanApp/State/CreateFoodItemAPI/Actions';
 import { connect } from 'react-redux'
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
  Image,TouchableOpacity
} from 'react-native';

import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';


class HomeScreen extends React.Component {
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
componentDidMount() {
  console.log("on press saloon")
}
  _renderItem({item,index}){
    var value=item.title;
    return (
      <View style={{
          backgroundColor:'floralwhite',
        
          height: 180,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          overflow: 'hidden',
          marginLeft: 10,
          marginRight: 10, }}>
        <Image resizeMode={'center'} source={value}
            style={{ width:300,height:200 , marginTop: 5 }}
          />
      </View>
    
    )
}
onPress = () => {
  const { navigate } = this.props.navigation;
 // navigate('SalonList')
 console.log("on press saloon")
 var payload = {
 
  dateCreated: "none",
}
 this.props.createFoodItem(payload)
};
onPressService = () => {
  const { navigate } = this.props.navigation;
  navigate('ServiceDetail')
};
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
        <View
          style={{
            height: 120,
            backgroundColor: Colors.black,
          }}>

<View
            style={{
              flexDirection:'row',
              margin: 10,
              paddingStart: 10,
              borderRadius: 5,
              borderWidth: 1,
             
            }}>
<Image source={require('./img/ic_map.png')}
            style={{ width: 20, height: 20, marginTop: 5 ,tintColor:"#000080",tintColor:"#fff"}}
          />
          <Text style={{
            fontSize: 16,
            marginTop: 3,
            marginStart: 10,
            fontWeight: "bold",
            color: Colors.white,
          }}>21, Zorawar singh gate,Jaipur...</Text>
 <Image source={require('./img/ic_down.png')}
            style={{ width: 14, height: 14,  marginLeft: 'auto', marginEnd: 15 ,tintColor:"#fff",alignSelf:"center"}}
          />

  </View >
          <View
            style={{
              alignItems:'center',
              flexDirection:'row',
              margin: 10,
              paddingStart: 10,
              borderRadius: 5,
              borderWidth: 1,
              backgroundColor: Colors.white,
            }}>

<Image source={require('./img/ic_search.png')}
            style={{ width: 18, height: 18, marginStart:5,marginTop: 5 ,tintColor:"#000080"}}
          />

            <TextInput

              placeholder="Search for a Service and packages"
              placeholderTextColor="#666666"
              underlineColorAndroid="transparent"
              style={{ marginStart:10}}
            />


          </View >
        </View>

        <View style={{
          flexDirection: 'row',
          backgroundColor: Colors.white
        }}>
 <TouchableOpacity
          style={ {flex: 1}}
          onPress={this.onPress}
        >
          <View style={{

            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Image source={require('./img/woman_salon.png')}
              style={{ width: 50, height: 50 }}
            />

            <Text style={{
              fontSize: 12,
              marginTop: 5,
              textAlign: 'center',

              color: Colors.black,
            }}>Salon for {"\n"}Women</Text>

          </View>
          </TouchableOpacity>
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
            <Image source={require('./img/men_salon.jpg')}
              style={{ width: 50, height: 50 }}
            />

            <Text style={{
              fontSize: 12,
              marginTop: 5,

              textAlign: 'center',
              color: Colors.black,
            }}>Salon for Men</Text>

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
            <Image source={require('./img/massage_icon.jpg')}
              style={{ width: 50, height: 50 }}
            />

            <Text style={{
              fontSize: 12,
              marginTop: 5,

              textAlign: 'center',
              color: Colors.black,
            }}>Massage for {"\n"}Women</Text>

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
            <Image source={require('./img/massage_men.jpg')}
              style={{ width: 50, height: 50 }}
            />

            <Text style={{
              fontSize: 12,
              marginTop: 5,

              textAlign: 'center',
              color: Colors.black,
            }}>Massage for {"\n"}Men</Text>

          </View>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: "#c3c3c3"
          }}
        ></View>


        <View style={{
          flexDirection: 'row',
          backgroundColor: Colors.white
        }}>

          <View style={{

            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Image source={require('./img/ic_electronics.jpg')}
              style={{ width: 50, height: 50 }}
            />

            <Text style={{
              fontSize: 12,
              marginTop: 5,
              textAlign: 'center',

              color: Colors.black,
            }}>Electricians</Text>

          </View>

          <View
            style={{
              width: 1, height: 90,
              backgroundColor: "#c3c3c3"
            }}
          ></View>
<TouchableOpacity
          style={ {flex: 1}}
          onPress={this.onPressService}
        >
          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Image source={require('./img/icon_ac.png')}
              style={{ width: 50, height: 50 }}
            />

            <Text style={{
              fontSize: 12,
              marginTop: 5,

              textAlign: 'center',
              color: Colors.black,
            }}>Ac Service {"\n"}Repair</Text>

          </View>
          </TouchableOpacity>
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
            <Image source={require('./img/ic_appliance.png')}
              style={{ width: 40, height: 40 }}
            />

            <Text style={{
              fontSize: 12,
              marginTop: 5,

              textAlign: 'center',
              color: Colors.black,
            }}>Appliance {"\n"}Repair</Text>

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
            <Image source={require('./img/cleaning.png')}
              style={{ width: 40, height: 40 }}
            />

            <Text style={{
              fontSize: 12,
              marginTop: 5,

              textAlign: 'center',
              color: Colors.black,
            }}>Cleaning {"\n"}Disinfection</Text>

          </View>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: "#c3c3c3"
          }}
        ></View>
        <View style={{
          flexDirection: 'row',
          backgroundColor: Colors.white
        }}>

          <View style={{

            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Image source={require('./img/ic_plumbers.png')}
              style={{ width: 50, height: 50 }}
            />

            <Text style={{
              fontSize: 12,
              marginTop: 5,
              textAlign: 'center',

              color: Colors.black,
            }}>Plumbers</Text>

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
            <Image source={require('./img/ic_carpenter.png')}
              style={{ width: 50, height: 50 }}
            />

            <Text style={{
              fontSize: 12,
              marginTop: 5,

              textAlign: 'center',
              color: Colors.black,
            }}>Carpenters</Text>

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
            <Image source={require('./img/ic_ro.png')}
              style={{ width: 40, height: 40 }}
            />

            <Text style={{
              fontSize: 12,
              marginTop: 5,

              textAlign: 'center',
              color: Colors.black,
            }}>RO Service {"\n"}Repair</Text>

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
            <Image source={require('./img/ic_pest.jpg')}
              style={{ width: 40, height: 40 }}
            />

            <Text style={{
              fontSize: 12,
              marginTop: 5,

              textAlign: 'center',
              color: Colors.black,
            }}>Pest Control</Text>

          </View>
        </View>
        <View
          style={{
            height: 10,
            backgroundColor: "#c9c9c9"
          }}
        ></View>

        <View style={{
          alignItems: 'center',
          margin: 10,
          flex: 1,
          flexDirection: 'row',
          backgroundColor: Colors.white
        }}>

          <Image source={require('./img/ic_safe.png')}
            style={{ width: 20, height: 20, marginTop: 5 ,tintColor:"#000080"}}
          />

          <Text style={{
            marginStart: 5,
            fontSize: 14,
            marginTop: 5,
            fontWeight: "bold",
            textAlign: 'center',
            color: Colors.black,
          }}>UC Safe</Text>
 <Image source={require('./img/ic_next.png')}
            style={{ width: 16, height: 16,  marginLeft: 'auto', marginEnd: 15 ,tintColor:"#000",alignSelf:"center"}}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            margin: 15,
            height: 90,
            paddingStart: 10,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "#c3c3c3",
            backgroundColor: Colors.white,
          }}>
          <View style={{


          }}>


            <Text style={{
              fontSize: 12,
              marginTop: 10,
              paddingStart:5,
              paddingEnd:5,
              paddingTop:2,
              paddingBottom:2,
              backgroundColor:"#add8e6",
              textAlign: 'center',
              color: "#000080",
            }}>Vaccinated Professionals</Text>
            <Text style={{
              fontSize: 12,
              marginTop: 5,
            
              color: Colors.black,
            }}>In Jaipur</Text>

            <Text style={{
              fontSize: 12,
              marginTop: 5,
         
              color: Colors.black,
            }}>509 of 606</Text>
          </View>

          <View style={{
            marginTop:10,
            marginLeft: 'auto',
            marginEnd:20,
        width: 60,
        height: 60,
        justifyContent: "center",
        borderRadius: 60 / 2,
        borderWidth: 3,
        borderColor: "#000080",
      }}>
        <Text style={{
          alignSelf: 'center',
          fontWeight: 'bold',
          color: '#000',
          fontSize: 15,
        }}>100%</Text>
      </View>
        </View>
        <View
            style={{
              height: 10,
              backgroundColor: "#c3c3c3"
            }}
          ></View>
        <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                <Carousel
                firstItem={1}
                loop={true}
                autoplay={true}
                enableSnap={true}
                hasParallaxImages={true}
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={300}
                  itemWidth={300}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
            <View style={{ height:60}}></View>
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


const mapStateToProps = state => ({
 
  createFoodDataResponse: state.createFoodData,

 
 
})

const mapDispatchToProps = dispatch => ({

  createFoodItem: (...args) => {
    console.log("create food dispatch method")
    dispatch(createFoodItem(...args))
  },

})
export default connect(mapStateToProps,mapDispatchToProps,
)(HomeScreen)