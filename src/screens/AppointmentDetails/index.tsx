import React from 'react'
import { FlatList, ImageBackground, Text, View } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { BorderlessButton } from 'react-native-gesture-handler'

import { Fontisto } from '@expo/vector-icons'

import { AppointmentProps } from '../../components/Appointment'
import { ListDivider } from '../../components/ListDivider'
import { Background } from '../../components/Background'
import { ListHeader } from '../../components/ListHeader'
import { ButtonIcon } from '../../components/ButtonIcon'
import { Header } from '../../components/Header'
import { Member } from '../../components/Member'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'
import BannerImg from '../../assets/banner.png'

type Params = {
  guildSelected: AppointmentProps
}

export function AppointmentDetails() {
  const route = useRoute()
  const { guildSelected } = route.params as Params

  const members = [
    {
      id: '1',
      username: 'Lílian',
      avatar_url: 'https://github.com/lilianmartinsfritzen.png',
      status: 'online'
    },
    {
      id: '2',
      username: 'LiliMF',
      avatar_url: 'https://github.com/lilianmartinsfritzen.png',
      status: 'offline'
    }
  ]

  return (
    <Background>
      <Header 
        title='Detalhes'
        action={
          <BorderlessButton>
            <Fontisto 
              name='share'
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />

      <ImageBackground
        source={BannerImg}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>
            { guildSelected.guild.name }
          </Text>

          <Text style={styles.subtitle}>
            { guildSelected.description }
          </Text>
        </View>
      </ImageBackground>

      <ListHeader 
        title='Jogadores'
        subtitle='Total 3'
      />

      <FlatList 
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Member data={item} />
        )}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        style={styles.members}
      />

      <View style={styles.footer}>
        <ButtonIcon 
          title='Entrar na partida'
        />
      </View>
    </Background>
  );
}