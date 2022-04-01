import React, {useContext} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import NavLink from '../components/NavLink';
import AuthForm from '../components/AuthForm';
import {Context} from '../context/AuthContext';

const SigninScreen = () => {
  const {state, signin, clearErrorMessage} = useContext(Context);
  return (
    <View style={style.container}>
      <NavigationEvents onWillFocus={clearErrorMessage}/>
      <AuthForm 
        headerText='Sign in for Trackers'
        submitButtonText='Sign in'
        errorMessage={state.errorMessage}
        onSubmit={signin}
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
