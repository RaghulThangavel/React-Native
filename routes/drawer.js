import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer, } from 'react-navigation';
import HomeStack from './homeStack';
import AboutUsStack from './aboutStack';
import ScannerStack from './scanStack';

const RootDrawerNav = createDrawerNavigator({
    Home : {
        screen : HomeStack
    },
    About : {
        screen : AboutUsStack
    },
    Scan : {
        screen : ScannerStack
    },

});

export default createAppContainer(RootDrawerNav);