import { StatusBar } from 'expo-status-bar';
import { Archivo_400Regular, Archivo_700Bold, useFonts} from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { SafeAreaView } from 'react-native';

import { Landing } from './src/pages/Landing';
import { Loading } from './src/components/Loading';

export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  })
  if(!fontsLoaded){
    return <Loading />
  }
  return (
    <>
      <Landing />
      <StatusBar style="auto" />
    </>
  );
};
