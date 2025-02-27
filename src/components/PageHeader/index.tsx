import { Image, Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import backIcon from '../../assets/images/icons/back.png';
import logoImage from '../../assets/images/logo.png';

import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  headerRight?: ReactNode;
  children?: ReactNode;
}

export function PageHeader({title, headerRight, children}: PageHeaderProps){
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
      <View style={styles.header}> 
        <Text style={styles.title}>{title}</Text>
        {headerRight}
      </View>
      {children}
    </View>
  )
}