import { useState } from 'react';
import { useFocusEffect

 } from '@react-navigation/native';
import { View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Teacher, TeacherItem } from '../../components/TeacherItem';
import { PageHeader } from '../../components/PageHeader';

import { styles } from './styles';

export function Favorites(){
  const [favorites, setFavorites] = useState([]);

  function loadFavorites(){
    AsyncStorage.getItem('favorites').then(response =>{
      if(response){
        const favoritedTeachers = JSON.parse(response)
        setFavorites(favoritedTeachers);
      }
    })
  }
  useFocusEffect(()=>{
    loadFavorites();
  })
  return (
    <View style={styles.container}>
      <PageHeader title='Meus proffys favoritos' />
      <ScrollView 
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      > 
        {
          favorites.map((teacher: Teacher)=>(
            <TeacherItem 
              key={teacher.id}
              teacher={teacher} 
              favorited/>
          ))
        }
      </ScrollView>
    </View>
  )
}