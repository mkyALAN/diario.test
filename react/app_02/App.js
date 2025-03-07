import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';
import 'react-native-gesture-handler';
import 'react-native-get-random-values';
const App = () => {
    return (
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
    );
};

export default App;