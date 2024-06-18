import * as ScreenCapture from 'expo-screen-capture';
import { useEffect } from 'react';
import { Button, StyleSheet, View } from 'react-native';

export default function ScreenCaptureExample() {
  const hasPermissions = async () => {
    const { status } = await ScreenCapture.requestPermissionsAsync();
    return status === 'granted';
  };

  useEffect(() => {
    let subscription: any;

    const addListenerAsync = async () => {
      if (await hasPermissions()) {
        subscription = ScreenCapture.addScreenshotListener(() => {
          alert('Thanks for screenshotting my beautiful app 😊');
        });
      } else {
        console.error('Permissions needed to subscribe to screenshot events are missing!');
      }
    };
    addListenerAsync();

    return () => {
      subscription?.remove();
    };
  }, []);

  const activate = async () => {
    await ScreenCapture.preventScreenCaptureAsync();
  };

  const deactivate = async () => {
    await ScreenCapture.allowScreenCaptureAsync();
  };

  return (
    <View style={styles.container}>
      <Button title="Activate" onPress={activate} />
      <Button title="Deactivate" onPress={deactivate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
