import React,{useState,useLayoutEffect} from 'react';
import { StyleSheet, View,KeyboardAvoidingView } from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {Input,Button,Text} from 'react-native-elements';

import {auth} from '../firebase';



const RegisterScreen = ({navigation}) => {

    const [name,setName] =useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [imageUrl,setImageUrl] = useState('');

    
    const register=()=>{
        auth.createUserWithEmailAndPassword(email,password).then(authUser=>{
            authUser.user.update({
                displayName:name,
                photoURL:imageUrl || "https://banner2.cleanpng.com/20180722/gfc/kisspng-user-profile-2018-in-sight-user-conference-expo-5b554c0968c377.0307553315323166814291.jpg"

            })
        }).catch(err=>alert(err.message));
    };
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle:"Back to Login"
        })
    }, [navigation])


    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />

            <Text h3 style={{marginBottom:50}}>
                Create a Signal Account
            </Text>
            <View style={styles.inputContainer}>
                <Input
                    placeholder="Full Name"
                    autoFocus
                    autoCapitalize='none'
                    type="text"
                    value={name}
                    onChangeText={name =>setName(name)}
                />
                <Input
                    placeholder="Email"
                    autoCapitalize='none'
                    type="email"
                    value={email}
                    onChangeText={email =>setEmail(email)}
                />
                <Input
                    placeholder="Password"
                    autoCapitalize='none'
                    type="password"
                    secureTextEntry
                    value={password}
                    onChangeText={password =>setPassword(password)}
                />
                <Input
                    placeholder="Profile Picture URL (Optional)"
                    autoCapitalize='none'
                    type="text"
                    value={imageUrl}
                    onChangeText={text =>setImageUrl(text)}
                    onSubmitEditing={register}
                />                                                
            </View>
            <Button
                title="Register"
                onPress={register}
                raised
                containerStyle={styles.button}
            />
        </KeyboardAvoidingView>
    );
};


export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        padding:10,
        backgroundColor: '#fff',
    },
    button: {
        width: 200,
        marginTop:10,
        borderRadius:10,
        backgroundColor: '#2c6bed',
    },
    inputContainer: {
        width:300
    }

});
