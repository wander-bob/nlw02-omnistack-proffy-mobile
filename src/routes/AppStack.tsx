import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Landing } from '../pages/Landing';
import { GiveClasses } from '../pages/GiveClasses';
import { StudyTabs } from './StudyTabs';

export function AppStack(){
  const {Navigator, Screen} = createStackNavigator();
  return (
    <NavigationContainer>
      <Navigator 
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name='Landing' component={Landing} />
        <Screen name='GiveClasses' component={GiveClasses} />
        <Screen name='Study' component={StudyTabs} />
      </Navigator>
    </NavigationContainer>
  )
}