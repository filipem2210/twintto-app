import React from 'react';

import {
  Container,
  Storie,
  AvatarWrapper,
  Avatar,
  Name,
  PlusIcon,
} from './styles';

export default function Stories() {
  return (
    <Container>
      <Storie>
        <AvatarWrapper>
          <Avatar
            source={{
              uri:
                'https://pbs.twimg.com/profile_images/1260607790323830791/NGrNpCkO_bigger.jpg',
            }}
          />
          <PlusIcon />
        </AvatarWrapper>
        <Name>filipem2210</Name>
      </Storie>
    </Container>
  );
}
