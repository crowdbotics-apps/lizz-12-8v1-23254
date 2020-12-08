import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignUp14183281Navigator from '../features/SignUp14183281/navigator';
import BlankScreen1183280Navigator from '../features/BlankScreen1183280/navigator';
import BlankScreen0183279Navigator from '../features/BlankScreen0183279/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignUp14183281: { screen: SignUp14183281Navigator },
BlankScreen1183280: { screen: BlankScreen1183280Navigator },
BlankScreen0183279: { screen: BlankScreen0183279Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
