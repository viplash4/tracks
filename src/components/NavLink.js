import React from 'react';
import { View, StyleSheet, TouchableOpacity,Text } from 'react-native';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';


const NavLink = ({navigation, text, routeName}) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
            <Spacer>
                <Text style={style.link}>{text}</Text>
            </Spacer>
        
        </TouchableOpacity>
    );
};


const style = StyleSheet.create({
    link: {
        fontSize: 16,
        fontWeight: '500'
    }
});

export default withNavigation(NavLink);