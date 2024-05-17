import { useState } from 'react';
import { View, ScrollView, Text, TextInput} from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from './styles';
import { PageHeader } from '../../components/PageHeader';
import { TeacherItem, Teacher } from '../../components/TeacherItem';

import { api } from '../../services/api';


export function TeacherList(){
  const [isFiltersVisible, setIsFiltersVisible]=useState(false);
  const [favorites, setFavorites] = useState<number[]>([])
  const [subject, setSubject] = useState('');
  const [week_day, setWeek_Day] = useState('');
  const [time, setTime] = useState('');
  const [teachers, setTeachers]= useState([]);
  function loadFavorites(){
    AsyncStorage.getItem('favorites').then(response =>{
      if(response){
        const favoritedTeachers = JSON.parse(response)
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher)=>{
          return teacher.id;
        })
        setFavorites(favoritedTeachersIds);
      }
    })
  }
  function handleToggleFiltersVisible(){
    setIsFiltersVisible(!isFiltersVisible);
  }
  function handleFiltersSubmit(){
    loadFavorites();
    api.get('/classes', {
      params: {
        subject, week_day: week_day, time
      }
    }).then((response)=>{
      setTeachers(response.data);
      setIsFiltersVisible(!isFiltersVisible);
    }).catch((error)=>{
      console.log(error)
    })

  }
  return (
    <View style={styles.container}>
      <PageHeader 
        title='Proffys disponíveis' 
        headerRight={(
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name='filter' size={20} color={'#FFF'} />
          </BorderlessButton>
        )}
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput 
              style={styles.input}
              value={subject}
              onChangeText={text => setSubject(text)}
              placeholder='Qual a matéria'
              placeholderTextColor='#C1BCCC'
            />
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput 
                  style={styles.input}
                  value={week_day}
                  onChangeText={text => setWeek_Day(text)}
                  placeholder='Qual o dia?'
                  placeholderTextColor='#C1BCCC'
                />    
              </View>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput 
                  style={styles.input}
                  value={time}
                  onChangeText={text => setTime(text)}
                  placeholder='Qual horário?'
                  placeholderTextColor='#C1BCCC'
                />    
              </View>
            </View>
            <RectButton style={styles.submitButton} onPress={handleFiltersSubmit}>
              <Text style={styles.submitButtonText}>
                Filtrar
              </Text>
            </RectButton>
          </View>
        )}
        
      </PageHeader>
      <ScrollView 
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      > 
        {
          teachers.map((teacher:Teacher) =>(
            <TeacherItem 
              key={teacher.id} 
              teacher={teacher}
              favorited={favorites.includes(teacher.id)}
            />
          ))
        }
      </ScrollView>
    </View>
  )
}