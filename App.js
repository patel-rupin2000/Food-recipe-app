import { createDrawerNavigator,DrawerItems } from 'react-navigation-drawer';
import {createAppContainer, StackActions} from 'react-navigation';
import AboutScreen from './src/screens/AboutScreen';
// import TabNavigator from './src/screens/bottomTabNavigator.js';
import About from './src/screens/About';
import AboutStack from './src/screens/stack';
import {MaterialIcons} from '@expo/vector-icons';
import React, { useState } from 'react';
import Header from './src/screens/header';
import { StyleSheet, Text, View, FlatList,Button,TouchableOpacity ,Image,Modal} from 'react-native';
import AboutPass from './src/screens/pass';
import {Container,Body,Content} from 'native-base';
/*const [modalOpen,setModalopen]=useState(false);*/

const CustomDrawerContentComponent=(props)=>(
   
  <Container style={{}}>
  
    <View style={{alignSelf:"center",backgroundColor:"#d11d4c",height:250,width:"100%"}}>
        <Image style={{height:150,width:150,borderRadius:750,alignSelf:"center",marginTop:50}} source={{uri:'https://i.dlpng.com/static/png/4674369-food-icon-food-court-icon-png-transparent-png-600x600-free-food-courts-in-malls-png-820_640_preview.png'}}/>
        
        
    </View>

    <Content>
    <AboutScreen />
      <DrawerItems {...props}
      />

    </Content>
  </Container>
)

const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: AboutStack,
    navigationOptions: {
    headerTitle: () => <Header />}
  },
  Filter: {
    screen: AboutScreen,
     navigationOptions: {
       headerTitle: () => <Header />
     },
  }, 
   New: {
    screen: AboutPass,
    navigationOptions: {
      headerTitle: () => <Header />
      
    },
  },
  
},{
  initialRouteName:'Home',
  contentComponent:CustomDrawerContentComponent,
  drawerOpenRoute:'DrawerOpen',
  drawerCloseRoute:'DrawerClose',
  drawerToggleRoute:'DrawerToogle',
}
);

export default createAppContainer(RootDrawerNavigator);
