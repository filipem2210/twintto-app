import React from 'react';

import {
  Container,
  Retweeted,
  RetweetIcon,
  RetweetText,
  Body,
  Avatar,
  Content,
  Header,
  Name,
  User,
  Dot,
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
  return (
    <Container>
      {retweet && (
        <Retweeted>
          <RetweetIcon size={25} />
          <RetweetText>Você retweetou</RetweetText>
        </Retweeted>
      )}
      <Body>
        <Avatar source={{uri: avatar}} />

        <Content>
          <Header>
            <Name>{name} </Name>
            <User>{user}</User>
            <Dot> . </Dot>
            <Date>{date}</Date>
          </Header>

          <Description>{description}</Description>

          {image && (
            <ImageWrapper>
              <ImageContent source={{uri: image}} />
            </ImageWrapper>
          )}

          <Icons>
            <Comments>
              <CommentsIcon />
              <CommentsNumber> {comments}</CommentsNumber>
            </Comments>
            <Retweets>
              <RetweetIcon size={30} retweets={retweets} />
              <RetweetsNumber retweets={retweets}> {retweets}</RetweetsNumber>
            </Retweets>
            <Likes>
              <LikesIcon likes={likes} />
              <LikesNumber likes={likes}> {likes}</LikesNumber>
            </Likes>
            <Actions>
              <ActionsIcon />
            </Actions>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}
