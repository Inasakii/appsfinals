// screens/Home.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      console.log('User logged out successfully!');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Dashboard</Text>
      <Button title="Logout" onPress={handleLogout} color="#e74c3c" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default Home;
