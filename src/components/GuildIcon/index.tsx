import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

export function GuildIcon() {
  const uri = 'https://pbs.twimg.com/profile_images/1392925163969200136/wNZYmQXx_400x400.jpg'

  return (
    <Image 
      style={styles.image}
      source={{ uri }}
      resizeMode='cover'
    />
  );
}