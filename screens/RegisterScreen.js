import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements';
import { auth } from '../firebase';

const RegisterScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
         .then((userCredential) => {
           // Signed in 
          var user = userCredential.user;
          user.updateProfile({
            displayName: name,
            photoURL: imageUrl ? imageUrl : "https://unitycharity.com/wp-content/uploads/2015/09/wallpaper-for-facebook-profile-photo-1.jpg"
          }).then(() => {
            // Update successful
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          }); 
          // ...
          navigation.popToTop();
            })
         .catch((error) => {
         var errorMessage = error.message;
         alert(errorMessage)
          // ..
  });
    }

    return (
        <View style={styles.container}>
            <Input
                placeholder="Enter your name"
                label="Name"
                leftIcon={{ type: 'material', name: 'badge' }}
                value={name}
                onChangeText={text => setName(text)}
            />
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
            <Input
                placeholder="Enter your image Url"
                label="Profile Picture"
                leftIcon={{ type: 'material', name: 'face' }}
                value={imageUrl}
                onChangeText={text => setImageUrl(text)}

            />
            <Button 
            title="register" 
            containerStyle={{width: 200, marginTop: 10}}
            onPress={register} />
        </View>
    )
}

export default RegisterScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    }
})