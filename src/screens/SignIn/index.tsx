import React from 'react'
import { 
  View, 
  Text,
  Image
} from 'react-native'
import { CommonActions, useNavigation } from '@react-navigation/native'

import { ButtonIcon } from '../../components/ButtonIcon'

import { styles } from './styles'
import Illustration from '../../assets/illustration.png'

export function SignIn() {
  const navigation = useNavigation()

  function handleSignIn() {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Home',
      })
    );
  }

  return (
    <View style={styles.container}>
      <Image 
        source={Illustration} 
        style={styles.image}
        resizeMode='stretch'
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se{'\n'}
          e organize suas{'\n'}
          jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games{'\n'}
          favoritos com seus amigos
        </Text>

        <ButtonIcon 
          title='Entrar com Discord'
          onPress={handleSignIn}
        />
      </View>
    </View>
  )
}