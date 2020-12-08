import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen5183284Navigator from '../features/BlankScreen5183284/navigator';
import SignIn43183282Navigator from '../features/SignIn43183282/navigator';
import SignUp14183281Navigator from '../features/SignUp14183281/navigator';
import BlankScreen1183280Navigator from '../features/BlankScreen1183280/navigator';
import BlankScreen0183279Navigator from '../features/BlankScreen0183279/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen5183284: { screen: BlankScreen5183284Navigator },
SignIn43183282: { screen: SignIn43183282Navigator },
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
