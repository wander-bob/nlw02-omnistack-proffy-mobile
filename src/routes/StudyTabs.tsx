import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { TeacherList } from '../pages/TeacherList';
import { Favorites } from '../pages/Favorites';

export function StudyTabs(){
  const {Navigator, Screen} = createBottomTabNavigator();
  return (
    <Navigator 
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabBarItemStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        },
        tabBarIconStyle: {
          flex: 0,
          fontSize: 20,
          width: 20,
          height: '100%'
        },
        tabBarLabelStyle: { 
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16,
        },
        tabBarInactiveBackgroundColor: '#FAFAFA',
        tabBarActiveBackgroundColor: '#EBEBF5',
        tabBarInactiveTintColor: '#C1BCCC',
        tabBarActiveTintColor: '#32264D'
      }}
    >
      <Screen 
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({color, size})=>{
            return (
              <Ionicons size={size} color={color} name='easel' />
            )
          }
        }} 
        name='TeacherList' 
        component={TeacherList} 
      />
      <Screen 
        name='Favorites' 
        component={Favorites} 
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({color, size})=>{
            return (
              <Ionicons size={size} color={color} name='heart' />
            )
          }
        }} 
      />
    </Navigator>
  )
}