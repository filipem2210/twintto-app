import React from 'react';
import {Text} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {
  Container,
  Retweeted,
  RetweetIcon,
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
  CommentsIcon,
  CommentsNumber,
  Retweets,
  RetweetsNumber,
  Likes,
  LikesIcon,
  LikesNumber,
  Actions,
  ActionsIcon,
} from './styles';

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
          <RetweetIcon size={25} color={colors.gray} />
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
            <ImageWrapper>
              <ImageContent
                source={{uri: image}}
                style={{borderColor: colors.border}}
              />
            </ImageWrapper>
          )}

          <Icons>
            <Comments>
              <CommentsIcon color={colors.gray} />
              <CommentsNumber style={{color: colors.gray}}>
                {' '}
                {comments}
              </CommentsNumber>
            </Comments>
            <Retweets>
              <RetweetIcon
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
              <LikesIcon
                name={likes > 0 ? 'heart-sharp' : 'heart-outline'}
                color={likes > 0 ? colors.like : colors.gray}
              />
              <LikesNumber
                style={{color: likes > 0 ? colors.like : colors.gray}}>
                {' '}
                {likes}
              </LikesNumber>
            </Likes>
            <Actions>
              <ActionsIcon color={colors.gray} />
            </Actions>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}
