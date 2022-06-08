import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';

import { CategorySelect } from '../../components/CategorySelect';
import { ListDivider } from '../../components/ListDivider';
import { Appointment } from '../../components/Appointment';
import { Background } from '../../components/Background'
import { ListHeader } from '../../components/ListHeader';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';

import { styles } from './styles';

export function Home() {
  const [category, setCategory] = useState('')
  const navigation = useNavigation()

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma pardia da md10'
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma pardia da md10'
    }
  ]

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId)    
  }
  
  function handleAppointmentDetails() {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'AppointmentDetails',
      })
    );
  }

  function handleAppointmentCreate() {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'AppointmentCreate',
      })
    );
  }

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd 
          onPress={handleAppointmentCreate}
        />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />


      <ListHeader 
        title='Partidas agendadas'
        subtitle='Total 6'
      /> 
      <FlatList 
        data={appointments}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Appointment 
            data={item}
            onPress={handleAppointmentDetails}
          />
        )}
        ItemSeparatorComponent={() => <ListDivider/>}
        contentContainerStyle={{ paddingBottom: 69 }}
        style={styles.matches}
        showsVerticalScrollIndicator={false}
      />
    </Background>
  );
}