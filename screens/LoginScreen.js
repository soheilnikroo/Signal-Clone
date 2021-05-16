import {StatusBar} from 'expo-status-bar'
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,KeyboardAvoidingView } from 'react-native';
import {Button,Input,Image} from 'react-native-elements';
import { auth } from '../firebase';


const LoginScreen = ({navigation}) => {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    useEffect(() => {
        const unsubscribe= auth.onAuthStateChanged((authUser) => {
            if(authUser){
                navigation.replace('Home');
            }
        });

        return unsubscribe;
    }, [])

    const signIn =()=>{

    };

    return (
        <KeyboardAvoidingView behavior="padding" enabled style={styles.screen}>
            <StatusBar style="light"/>
            
            <Image source={{
                uri:"https://logowik.com/content/uploads/images/signal-messenger-icon9117.jpg"
            }}
            style={{width:200, height:200,marginTop:20}}
            />
            <View style={styles.inputContainer}>
                <Input 
                    placeholder="Email" 
                    autoFocus
                    type="email"
                    onChangeText={newText=>setEmail(newText)}
                    autoCapitalize="none"
                />
                <Input 
                    placeholder="Password" 
                    type="password"
                    secureTextEntry
                    onChangeText={newText=>setPassword(newText)}
                />
                <Button 
                    containerStyle={[styles.button,{backgroundColor:'#2c6bed',color:'#fff',borderRadius:10}]} 
                    title="Login" 
                    onPress={signIn} 
                />
                <Button 
                    containerStyle={[styles.button,{borderWidth:1.9,borderColor:'#2c6bed',color:'#2c6bed',borderRadius:10}]}  
                    type="outline" 
                    title="Register" 
                    onPress={()=>navigation.navigate('Register')} 
                />
            </View>
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    inputContainer:{
            width:'80%',
            marginTop:40,
    },
    screen: {
        flexDirection:'column',
        alignItems: 'center',
        flex:1
    },
    button:{
        marginBottom:15,
        width:200, 
        alignSelf:'center'
    }

});
