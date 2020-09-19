import React from 'react';
import {useTheme} from '@react-navigation/native';

import {
  Container,
  TweetsButton,
  TweetsText,
  TweetsAnswersButton,
  TweetsAnswersText,
  MediaButton,
  MediaText,
  LikesButton,
  LikesText,
} from './styles';

export default function ProfileTabs() {
  const {colors} = useTheme();

  return (
    <Container>
      <TweetsButton style={{borderBottomColor: colors.twitter}}>
        <TweetsText style={{color: colors.gray}}>Tweets</TweetsText>
      </TweetsButton>
      <TweetsAnswersButton>
        <TweetsAnswersText style={{color: colors.gray}}>
          Tweets e respostas
        </TweetsAnswersText>
      </TweetsAnswersButton>
      <MediaButton>
        <MediaText style={{color: colors.gray}}>Mídia</MediaText>
      </MediaButton>
      <LikesButton>
        <LikesText style={{color: colors.gray}}>Curtidas</LikesText>
      </LikesButton>
    </Container>
  );
}
