import { Image, Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import backIcon from '../../assets/images/icons/back.png';
import logoImage from '../../assets/images/logo.png';

import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

interface PageHeaderProps {
  title: string;
}

export function PageHeader({title}: PageHeaderProps){
  const {navigate} = useNavigation();
  function handleGoBack(){
    navigate('Landing' as never)
  }
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode='contain' />
        </BorderlessButton>
        <Image source={logoImage} resizeMode='contain' />
      </View>
      <Text style={styles.title}>{title}</Text> 
    </View>
  )
}