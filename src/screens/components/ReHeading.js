import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {withNavigation} from 'react-navigation';
import MEAls from './info';
import MEALS from './info';
var m=-1;
function ReHeader({navigation, title}) {
    const id= navigation.getParam('id');
  var i= -1;
    var c=2;
    function Helper(id){
        for (i = 0; i < MEALS.length; i++) {
            // console.log(i);
            if (MEALS[i].id === id) {
                // console.log(i);
                return i;
            }
        }
        return i;
    };
    m=Helper(id);
    return (
        <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 20, alignItems: 'center', justifyContent: 'center'}}>{MEALS[m].title.slice(0,28)}</Text>
        </View>
    )
};

const styles=StyleSheet.create({
    icon: {
        // position: 'absolute',
        left: 8,
        // top: 25,
    }
});

export default withNavigation(ReHeader);