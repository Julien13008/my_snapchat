import React from 'react';
import { SafeAreaView, Text, View, Button, Alert, StyleSheet } from 'react-native';
import tailwind from 'tailwind-rn';

const styles = StyleSheet.create({
    backgroundColor: {
      backgroundColor: '#fff200',
    }
  })

class Home extends React.Component {

    render() {
        return (
            <SafeAreaView style={[tailwind('flex-1 items-center justify-center '), styles.backgroundColor]}>
                <View style={styles.backgroundColor}>
                <Button title="Connexion" onPress={() => this.props.navigation.navigate('Connection')}/>
                <Button title="Inscription" onPress={() => this.props.navigation.navigate('Inscription')}/>
                </View>
            </SafeAreaView>
        )
    }
}

export default Home;