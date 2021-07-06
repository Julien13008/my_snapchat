import React, { useState } from 'react';
import { SafeAreaView, Text, View, Button, Alert, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useForm } from "react-hook-form";
import axios from 'axios';
import tailwind from 'tailwind-rn';

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: '#fff200',
  }
})
class Inscription extends React.Component {

  state = { 
    email: '',
    password: '',
    confirm: '',
    error: ''
  }

  handleEmail = (text) => {
    this.setState({ email: text})
  }

  handlePassword = (text) =>{
    this.setState({ password: text})
  }

  handleConfirm = (text) => {
    this.setState({ confirm: text})
  }

  login = (email, password, confirm) => {
      const userRegistration = {email, password}

      if (password == confirm) {
        axios.post('https://snapi-wac.herokuapp.com/inscription', userRegistration);
        this.props.navigation.navigate('Home')
      } else {
        this.setState({error: 'Les mots de passe sont différents'});
      }
  }

  render(){

    return (
      <SafeAreaView style={[tailwind('flex-1 items-center justify-center'), styles.backgroundColor]}>
        <View>
          <Text style={tailwind('text-red-700')}>{this.state.error}</Text>
          <Text>Email</Text>
          <TextInput 
            placeholder="Email"
            onChangeText={this.handleEmail}
            style={tailwind('bg-white border-black rounded-md my-2')}
          />
          <Text>Mot de passe</Text>
          <TextInput 
            secureTextEntry={true} 
            placeholder="Mot de passe" 
            onChangeText={ this.handlePassword}
            style={tailwind('bg-white border-black rounded-md my-2')}
            />
          <Text>Confirmer le mot de passe</Text>
          <TextInput 
            secureTextEntry={true}
            placeholder="Confirmation"
            onChangeText={ this.handleConfirm}
            style={tailwind('bg-white border-black rounded-md my-2')}
            />

          <TouchableOpacity
            title="S'inscrire" 
            onPress={() => this.login(this.state.email, this.state.password, this.state.confirm)} 
            style={[tailwind('p-1 w-20 mt-2 rounded-md text-center bg-blue-500'), {textAlign: 'center'}]}
          >
            <Text style={tailwind('text-center text-white')}>S'inscrire</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default Inscription;