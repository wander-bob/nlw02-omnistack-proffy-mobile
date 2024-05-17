import { Image, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { styles } from './styles';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import removeFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';


export function TeacherItem(){

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image 
        style={styles.avatar}
        source={{uri: `https://github.com/wander-bob.png`}}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Wanderson Alves</Text>
          <Text style={styles.subject}>Informática</Text>
        </View>
      </View>
      <Text style={styles.bio}>
        Escovador de bits e bytes e um apaixonado por sistemas computacionais.
        {'\n'}{'\n'}
        Dê-me redes, processadores, discos e pentes de memória para ver meus olhos brilharem.
      </Text>
      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$ 20,00</Text>
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