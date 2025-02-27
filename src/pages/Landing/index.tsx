import { useEffect, useState } from 'react';
import { Image, View, Text } from 'react-native';
import { useNavigation  } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'

import { styles } from './styles';
import { api } from '../../services/api';


export function Landing(){
  const {navigate} = useNavigation();
  const [totalConnections, setTotalConnections] = useState(0);
  function hadleNavigationToGiveClassesPage(){
    navigate('GiveClasses' as never);
  }
  function handleNavigateToStudyPages(){
    navigate('Study' as never);
  }
  useEffect(()=>{
    api.get('connections').then((response) =>{
      const total = response.data;
      setTotalConnections(total);
    })
  },[])
  return (
    <View style={styles.container}>
      <Image source={landingImg} />
      <Text style={styles.title}>
        Seja bem-vindo, {'\n'}
        <Text style={styles.titleBold}>
          O que deseja fazer?
        </Text>
      </Text>
      <View style={styles.buttonsContainer} >
        <RectButton 
          style={[styles.button, styles.buttonPrimary]}
          onPress={handleNavigateToStudyPages}
        >
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>
        <RectButton 
          style={[styles.button, styles.buttonSecondary]}
          onPress={hadleNavigationToGiveClassesPage}
        >
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>Dar Aulas</Text>
        </RectButton>
      </View>
      <Text style={styles.totalConnections}> 
        Total de {`0${totalConnections}`} conexões já realizadas {' '}
        <Image source={heartIcon} />
      </Text>
    </View>
  )
}