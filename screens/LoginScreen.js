import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements';
import { auth } from '../firebase';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = () => {
        auth.signInWithEmailAndPassword(email, password)
            .catch((error) => {
                var errorMessage = error.message;
                alert(errorMessage)
            });
    }
    useEffect(() => {
       const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
              navigation.replace('Chat');
            } else {
                navigation.canGoBack()&&navigation.popToTop();
              // User is signed out
            }
          });
          return unsubscribe
    }, [])

    return (
        <View style={styles.container}>
            <Input
                placeholder="Enter your email"
                label="Email"
                leftIcon={{ type: 'material', name: 'email' }}
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <Input
                placeholder="Enter your password"
                label="Password"
                leftIcon={{ type: 'material', name: 'lock' }}
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry
            />
            <Button title="sign in" onPress={signIn} containerStyle={{width: 200, marginTop: 10}} />
            <Button 
            title="register"
            containerStyle={{width: 200, marginTop: 10}}
            onPress={() => navigation.navigate('Register')} />
        </View>
    )
}

export default LoginScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    }
})