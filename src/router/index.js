import { StackNavigator, SwitchNavigator } from 'react-navigation'
import MainScreen from '../components/MainScreen';
import SplashScreen from '../components/SplashScreen';
import SignInScreen from '../components/SignInScreen';
import RegistrationScreen from '../components/RegistrationScreen';

const AppStack = StackNavigator({
    Main: {
        screen: MainScreen,
        headerMode: 'none',
        header: null,
        navigationOptions: {
            header: null
        }
    },
});

const AuthStack  = StackNavigator({
    Login: {
        screen: SignInScreen,
        headerMode: 'none',
        header: null,
        navigationOptions: {
            header: null
        }
    },
    Registration: {
        screen: RegistrationScreen,
        headerMode: 'none',
        header: null,
        navigationOptions: {
            header: null
        }
    },
});

export default SwitchNavigator(
    {
        Splash: {
            screen: SplashScreen,
            headerMode: 'none',
            header: null,
            navigationOptions: {
                header: null
            }
        },
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'Splash',
    }
);
