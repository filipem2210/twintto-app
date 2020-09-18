import React from 'react';
import {useTheme} from '@react-navigation/native';

import {
  Container,
  Storie,
  AvatarWrapper,
  Avatar,
  Name,
  PlusIcon,
} from './styles';

export default function Stories() {
  const {colors} = useTheme();

  return (
    <Container style={{borderTopColor: colors.border}}>
      <Storie>
        <AvatarWrapper style={{borderColor: colors.gray}}>
          <Avatar
            source={{
              uri:
                'https://pbs.twimg.com/profile_images/1260607790323830791/NGrNpCkO_bigger.jpg',
            }}
          />
          <PlusIcon name="pluscircle" size={15} color={colors.twitter} />
        </AvatarWrapper>
        <Name style={{color: colors.gray}}>filipem2210</Name>
      </Storie>
    </Container>
  );
}
