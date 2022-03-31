import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import NavLink from '../components/NavLink';
import AuthForm from '../components/AuthForm';

const SigninScreen = () => {
  return (
    <View style={style.container}>
      <AuthForm 
        headerText='Sign in for Trackers'
        submitButtonText='Sign in'
        errorMessage=''
        onSubmit={() => {}}
      />

      <NavLink
        text='Dont have an account? Sign up instead'
        routeName='Signup'

      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
});

export default SigninScreen;
