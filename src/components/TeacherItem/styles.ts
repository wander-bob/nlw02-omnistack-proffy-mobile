import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
  backgroundColor: '#FFF',
  borderWidth: 1,
  borderColor: '#e6e6f0',
  borderRadius: 8,
  marginBottom: 16,
  overflow: 'hidden'
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#eee'
  },
  profileInfo: {
    marginLeft: 16,
  },
  name: {
    fontFamily: 'Archivo_700Bold',
    color: '#32264D',
    fontSize: 20,
  },
  subject: {
    fontFamily: 'Poppins_400Regular',
    color: '#6A6188',
    fontSize: 12,
    marginTop: 4,
  },
  bio: {
    marginHorizontal: 24,
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    lineHeight: 24,
    color: '#6A6188'
  },
  footer: {
    backgroundColor: '#FAFAFC',
    padding: 24,
    alignItems: 'center',
  },
  price: {
    fontFamily: 'Poppins_400Regular',
    color: '#6A6180',
    fontSize: 14,
    marginTop: 24
  },
  priceValue: {
    fontFamily: 'Archivo_700Bold',
    color: '#8257E5',
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 16
  },
  favoriteButton: {
    backgroundColor: '#8257E5',
    width: 56,
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8
  },
  favorited: {
    backgroundColor: '#e33e3d'
  },
  contactButton: {
    backgroundColor: '#04D461',
    flex: 1,
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8
  },
  contactButtontext: {
    color: '#FFF',
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    marginLeft: 16,
  },
})