import { Image, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { styles } from './styles';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import removeFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
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
}

export function TeacherItem({teacher}:TeacherItemProps) {

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
            <RectButton style={[styles.favoriteButton, styles.favorited]}>
              {/* <Image source={heartOutlineIcon} />    */}
              <Image source={removeFavoriteIcon} />   
            </RectButton>
            <RectButton style={styles.contactButton}>
              <Image source={whatsappIcon} />   
              <Text style={styles.contactButtontext}>Entrar em contato</Text>
            </RectButton>
          </View>
      </View>
    </View>
  )
}