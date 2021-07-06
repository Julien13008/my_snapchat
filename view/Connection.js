import React, { useState } from 'react';
import { SafeAreaView, Text, View, Button, Alert, StyleSheet, TextInput } from 'react-native';
import tailwind from 'tailwind-rn';
import axios from 'axios';

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: '#fff200',
  }
})

class Connection extends React.Component {

  state = { 
    email: '',
    password: ''
  }

  handleEmail = (text) => {
    this.setState({ email: text})
  }

  handlePassword = (text) =>{
    this.setState({ password: text})
  }

  login = (email, password) => {
   const Login = {email, password};

  axios.post('https://snapi-wac.herokuapp.com/connection' , Login)
  .then((response) => {
    console.log(response.data.data.token);
  })
  
  }


  render(){

    return (
      <SafeAreaView style={[tailwind('flex-1 items-center justify-center'), styles.backgroundColor]}>
        <View>
          <Text>Email</Text>
          <TextInput 
            placeholder="Email"
            onChangeText={this.handleEmail}
          />
          <Text>Mot de passe</Text>
          <TextInput 
            secureTextEntry={true} 
            placeholder="Mot de passe" 
            onChangeText={ this.handlePassword}/>
          <Button title="Se connecter" onPress={() => this.login(this.state.email, this.state.password)} />
        </View>
      </SafeAreaView>
    );
  }
}

export default Connection;