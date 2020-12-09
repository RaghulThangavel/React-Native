import React,{useState, useEffect} from 'react';
import { Dimensions, StyleSheet, Text, View, Button } from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';
const { width } = Dimensions.get('window');

export default function Scanner() {

    const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

    return (
      <BarCodeScanner
      onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[StyleSheet.absoluteFill, styles.container]}
      >
        <View style={styles.layer}>
          <View>
            <Text style={styles.text}>Scan QR code</Text>
          </View>
        </View>
        <View style={styles.layerCenter}>
          <View style={styles.layer} />
          <View style={styles.focused} />
          <View style={styles.layer} />
        </View>
        <View style={styles.layer}>
            <View style={styles.button}>
            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
        </View>
            </View>
        
        
      </BarCodeScanner>
    );
}

const opacity = 'rgba(0, 0, 0, .6)';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  layer: {
    flex: 1,
    backgroundColor: opacity
  },
  layerCenter: {
    flex: 2,
    flexDirection: 'row'
  },
  focused: {
    flex: 10
  },
  button : {
      marginTop : 20,
      paddingHorizontal : 30,
  },
  text : {
    alignSelf : 'center',
    padding : 15,
    marginTop : 100,
    fontSize : 20,
    color : 'white',
    justifyContent : 'flex-end'
    
  }
});