import React from 'react';
import {Text} from 'react-native';
import {useTheme} from '@react-navigation/native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IoIcon from 'react-native-vector-icons/Ionicons';

import {
  Container,
  Retweeted,
  Body,
  Avatar,
  Content,
  Header,
  Name,
  User,
  Date,
  Description,
  ImageWrapper,
  ImageContent,
  Icons,
  Comments,
  CommentsNumber,
  Retweets,
  RetweetsNumber,
  Likes,
  LikesNumber,
  Actions,
} from './styles';

const iconSize = 25;

export default function Tweet({
  avatar,
  name,
  user,
  date,
  description,
  image,
  comments,
  retweets,
  likes,
  retweet,
}) {
  const {colors} = useTheme();

  return (
    <Container style={{borderBottomColor: colors.border}}>
      {retweet && (
        <Retweeted>
          <MCIcon name="twitter-retweet" size={iconSize} color={colors.gray} />
          <Text style={{color: colors.gray}}>Você retweetou</Text>
        </Retweeted>
      )}
      <Body>
        <Avatar source={{uri: avatar}} />

        <Content>
          <Header>
            <Name style={{color: colors.text}}>{name} </Name>
            <User style={{color: colors.gray}}>{user}</User>
            <Text style={{color: colors.gray}}> . </Text>
            <Date style={{color: colors.gray}}>{date}</Date>
          </Header>

          <Description>
            <Text style={{color: colors.text}}>{description}</Text>
          </Description>

          {image && (
            <ImageWrapper style={{borderColor: colors.border}}>
              <ImageContent
                source={{uri: image}}
                style={{borderColor: colors.border}}
              />
            </ImageWrapper>
          )}

          <Icons>
            <Comments>
              <IoIcon
                name="chatbubble-outline"
                size={iconSize}
                color={comments > 0 ? colors.twitter : colors.gray}
              />
              <CommentsNumber
                style={{color: comments > 0 ? colors.twitter : colors.gray}}>
                {' '}
                {comments}
              </CommentsNumber>
            </Comments>
            <Retweets>
              <MCIcon
                name="twitter-retweet"
                size={30}
                color={retweets > 0 ? colors.retweet : colors.gray}
              />
              <RetweetsNumber
                style={{color: retweets > 0 ? colors.retweet : colors.gray}}>
                {' '}
                {retweets}
              </RetweetsNumber>
            </Retweets>
            <Likes>
              <IoIcon
                name={likes > 0 ? 'heart-sharp' : 'heart-outline'}
                size={iconSize}
                color={likes > 0 ? colors.like : colors.gray}
              />
              <LikesNumber
                style={{color: likes > 0 ? colors.like : colors.gray}}>
                {' '}
                {likes}
              </LikesNumber>
            </Likes>
            <Actions>
              <IoIcon
                name="share-social-outline"
                size={iconSize}
                color={colors.gray}
              />
            </Actions>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}
