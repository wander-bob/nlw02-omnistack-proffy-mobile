import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { 
    backgroundColor: '#8257E5',
    flex: 1,
    justifyContent: 'center',
    padding: 40
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: '#FFF',
    fontFamily: 'Archivo_700Bold',
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180
  },
  description: {
    marginTop: 24,
    color: '#D4C2FF',
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'Poppins_400Regular',
    maxWidth: 240
  },
  okButton: { 
    marginVertical: 40,
    backgroundColor: '#04d361',
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  okButtonText: { 
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Archivo_700Bold'
  }
})