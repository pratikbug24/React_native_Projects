import { View, Button } from 'react-native';
import { router } from 'expo-router';

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button
        title="Go to Login"
        onPress={() => router.push('./login')}
      />

      <Button
        title="Go to Register"
        onPress={() => router.push('./register')}
      />
    </View>
  );
}