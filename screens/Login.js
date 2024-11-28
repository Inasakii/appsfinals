// screens/Login.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User signed in successfully!');
      navigation.navigate('Home');
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  return (
    <View style={styles.container}>
        {/* Login Area */}
        
        <View style={styles.loginBox}>   
        <Text style={styles.title}>Login</Text>
          
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
          <Button style={styles.loginBtn} title="Login" onPress={handleLogin} color="black"/>
        <Text
          style={styles.link}
          onPress={() => navigation.navigate('Signup')}
        >
          Don't have an account? Sign up
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    
  },
  loginBox:{
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 20, 
    

  },
  loginBtn:{
    justifyContent: 'center',
  },
  title: {
    alignSelf: 'center',
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 4,
  },
  link: {
    marginTop: 16,
    color: '#3498db',
  },
});

export default Login;
