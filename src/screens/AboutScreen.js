import React, {useState} from 'react';
import {View, Text,Button , Switch, StyleSheet, ShadowPropTypesIOS} from 'react-native';
import NewHead from './stack2';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import { createStackNavigator } from 'react-navigation-stack';
import { withNavigation} from 'react-navigation';
import Filter from './components/filter';
import AboutScreen2 from './newHome';
import Header from "./header";
import NewShow from './newrecipe';
import Panel from 'react-native-panel';


function AboutScreen({navigation}){
        var m='orange';
        return <View>
            <Text style={{marginTop: 30,fontSize:20,fontWeight:'bold',textDecorationLine: 'underline'}}>Filters</Text> 
            <AboutScreen2 />
          
        </View>
        
};

const styles = StyleSheet.create({
        container: {
          flex: 1,
          alignItems: "center",
        //   justifyContent: "center",
          flexDirection: "row",
          marginTop: 40
        }
      });

// const Stack = createStackNavigator();

// function AboutScreen() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={AboutScreen2}
//           options={{
//             // title: 'Welcome',
//           header: () => (
//             <NewHead title="Filter" />
//           ),
//           }}
//         />
//         <Stack.Screen name="Results2" component={NewShow} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


export default AboutScreen;