import { Image, Text, View, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from './styles';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import removeFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import { useState } from 'react';
import { api } from '../../services/api';

export interface Teacher {
  id: number;
    avatar:string; 
    bio: string;
    cost: number;
    name: string;
    subject:string
    whatsapp:string
}
interface TeacherItemProps {
  teacher: Teacher;
  favorited: boolean;
}

export function TeacherItem({teacher, favorited}:TeacherItemProps) {
  const [ isFavorited, setIsFavorited] = useState(favorited);
  function handleLinkToWhatsApp(){
    api.post('connections',{user_id: teacher.id});
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
  }
  async function handleToggleFavorite(){
    const favorites = await AsyncStorage.getItem('favorites');
    let favoritesArray = [];

    if(favorites){
      favoritesArray = JSON.parse(favorites);
    }

    if(isFavorited){
      const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher)=>{
        return teacherItem.id === teacher.id;
      })
      favoritesArray.splice(favoriteIndex, 1);
      setIsFavorited(false);
    }else{
      favoritesArray.push(teacher)
      setIsFavorited(true)
    }
    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray))
  }
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image 
        style={styles.avatar}
        source={{uri: teacher.avatar}}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>
      <Text style={styles.bio}>
        {teacher.bio}
      </Text>
      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
        </Text>

          <View style={styles.buttonsContainer}>
            <RectButton
              onPress={handleToggleFavorite}
              style={
                [styles.favoriteButton, isFavorited ? styles.favorited : {}]
              }
            >
              {isFavorited 
                ? <Image source={removeFavoriteIcon} />    
                : <Image source={heartOutlineIcon} />
              }
              
              
            </RectButton>
            <RectButton style={styles.contactButton} onPress={handleLinkToWhatsApp}>
              <Image source={whatsappIcon} />   
              <Text style={styles.contactButtontext}>Entrar em contato</Text>
            </RectButton>
          </View>
      </View>
    </View>
  )
}