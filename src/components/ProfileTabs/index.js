import React from 'react';

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
  return (
    <Container>
      <TweetsButton>
        <TweetsText>Tweets</TweetsText>
      </TweetsButton>
      <TweetsAnswersButton>
        <TweetsAnswersText>Tweets e respostas</TweetsAnswersText>
      </TweetsAnswersButton>
      <MediaButton>
        <MediaText>Mídia</MediaText>
      </MediaButton>
      <LikesButton>
        <LikesText>Curtidas</LikesText>
      </LikesButton>
    </Container>
  );
}
