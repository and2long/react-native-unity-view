/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Alert, Button, View } from 'react-native';

import UnityView, { UnityModule } from '@asmadsen/react-native-unity-view';

function App(): JSX.Element {
  const onUnityMessage = (hander) => {
    console.log({ hander });
  };

  const onClick = () => {
    UnityModule.postMessageToUnityManager({
      name: 'ToggleRotate',
      data: '',
      callBack: (data: any) => {
        Alert.alert('Tip', JSON.stringify(data));
      },
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <UnityView
          style={{ flex: 1 }}
          onMessage={onUnityMessage}
          onUnityMessage={onUnityMessage}
        />
      </View>
      <Button
        style={{ width: '100%' }}
        title="Toggle rotation"
        onPress={onClick}
      />
    </View>
  );
}

export default App;
