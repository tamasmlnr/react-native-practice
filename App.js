import { StyleSheet } from 'react-native';
import Main from './src/components/Main';
import { NativeRouter } from 'react-router-native';

export default function App() {
  return <NativeRouter><Main /></NativeRouter>;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

