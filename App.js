import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
// import Footer from './components/footer';
import Navigator from './routes/drawer';

function App() {

  return (
      <Navigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: '#fff',
  },


});

export default App;