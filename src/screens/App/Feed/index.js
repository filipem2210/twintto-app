import React from 'react';

import Header from '../../../components/Header';
import Stories from '../../../components/Stories';
import Tweet from '../../../components/Tweet';

import logo from '../../../assets/logo.png';
import writeIcon from '../../../assets/write.png';

import {
  Container,
  Wrapper,
  Logo,
  Tweets,
  TweetButton,
  WriteIcon,
} from './styles';

export default function Feed({navigation}) {
  return (
    <Container>
      <Wrapper>
        <Header navigation={navigation} feed>
          <Logo source={logo} />
        </Header>
        <Stories />
        <Tweets>
          <Tweet
            avatar="https://pbs.twimg.com/profile_images/1299146910238945281/VckzvGa9_bigger.jpg"
            name="Gabs Ferreira"
            user="@o_gabsferreira"
            date="20 de mai"
            description="Entendendo a web em 4 passos simples"
            image="https://pbs.twimg.com/media/EYfA145WAAE5Qm9?format=jpg&name=small"
            comments={15}
            retweets={281}
            likes={125}
            retweet
          />
          <Tweet
            avatar="https://pbs.twimg.com/profile_images/1303700849559064585/F89znLqg_bigger.jpg"
            name="talita souza"
            user="@souzatali7"
            date="10 de set"
            description="queria ta tirando uma soneca com o ar condicionado no talo"
            likes={1}
          />
          <Tweet
            avatar="https://pbs.twimg.com/profile_images/1299146910238945281/VckzvGa9_bigger.jpg"
            name="Gabs Ferreira"
            user="@o_gabsferreira"
            date="20 de mai"
            description="Entendendo a web em 4 passos simples"
            image="https://pbs.twimg.com/media/EYfA145WAAE5Qm9?format=jpg&name=small"
            comments={15}
            retweets={281}
            likes={125}
            retweet
          />
          <Tweet
            avatar="https://pbs.twimg.com/profile_images/1303700849559064585/F89znLqg_bigger.jpg"
            name="talita souza"
            user="@souzatali7"
            date="10 de set"
            description="queria ta tirando uma soneca com o ar condicionado no talo"
            likes={1}
          />
          <Tweet
            avatar="https://pbs.twimg.com/profile_images/1299146910238945281/VckzvGa9_bigger.jpg"
            name="Gabs Ferreira"
            user="@o_gabsferreira"
            date="20 de mai"
            description="Entendendo a web em 4 passos simples"
            image="https://pbs.twimg.com/media/EYfA145WAAE5Qm9?format=jpg&name=small"
            comments={15}
            retweets={281}
            likes={125}
            retweet
          />
          <Tweet
            avatar="https://pbs.twimg.com/profile_images/1303700849559064585/F89znLqg_bigger.jpg"
            name="talita souza"
            user="@souzatali7"
            date="10 de set"
            description="queria ta tirando uma soneca com o ar condicionado no talo"
            likes={1}
          />
        </Tweets>
      </Wrapper>

      <TweetButton>
        <WriteIcon source={writeIcon} />
      </TweetButton>
    </Container>
  );
}
