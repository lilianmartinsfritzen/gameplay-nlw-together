import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';
import DiscordSvg from '../../assets/discord.svg'

const { CDN_IMAGE } = process.env

type Props = {
  guildId: string
  iconId: string | null
}

export function GuildIcon({
  guildId,
  iconId
}: Props) {
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`
  
  // 'https://pbs.twimg.com/profile_images/1392925163969200136/wNZYmQXx_400x400.jpg'

  return (
    <View style={styles.container}>
      {
        iconId
        ? <Image 
            style={styles.image}
            source={{ uri }}
            resizeMode='cover'
          />
        : <DiscordSvg 
            width={40}
            height={40}
          />
      }
    </View>
  );
}