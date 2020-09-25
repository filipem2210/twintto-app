import React, {useState, useEffect, createRef} from 'react';
import {Animated} from 'react-native';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

import {
  Container,
  Retweeted,
  RetweetIcon,
  RetweetText,
  Body,
  AvatarWrapper,
  Avatar,
  Content,
  Header,
  Name,
  User,
  Dot,
  Date,
  DescriptionWrapper,
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
  const avatarRef = createRef();
  const userInfoRef = createRef();
  const descRef = createRef();
  const tweetImgRef = createRef();
  const [avatarVisible, setAvatarVisible] = useState(false);
  const [tweetImgVisible, setTweetImgVisible] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const shimmerAnimated = Animated.stagger(400, [
      avatarRef.current.getAnimated(),
      tweetImgRef.current.getAnimated(),
      Animated.parallel([
        userInfoRef.current.getAnimated(),
        descRef.current.getAnimated(),
      ]),
    ]);
    Animated.loop(shimmerAnimated).start();
  }, [avatarRef, userInfoRef, descRef, tweetImgRef]);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 1500);
  }, []);

  return (
    <Container>
      {retweet && (
        <Retweeted>
          <RetweetIcon size={25} />
          <RetweetText>Você retweetou</RetweetText>
        </Retweeted>
      )}
      <Body>
        <AvatarWrapper>
          <ShimmerPlaceholder
            ref={avatarRef}
            width={49}
            height={49}
            shimmerStyle={{borderRadius: 49}}
            visible={avatarVisible}>
            <Avatar
              source={{uri: avatar}}
              onLoadEnd={() => setAvatarVisible(true)}
            />
          </ShimmerPlaceholder>
        </AvatarWrapper>

        <Content>
          <ShimmerPlaceholder ref={userInfoRef} visible={visible} stopAutoRun>
            <Header>
              <Name>{name} </Name>
              <User>{user}</User>
              <Dot> . </Dot>
              <Date>{date}</Date>
            </Header>
          </ShimmerPlaceholder>

          <DescriptionWrapper>
            <ShimmerPlaceholder ref={descRef} visible={visible} stopAutoRun>
              <Description>{description}</Description>
            </ShimmerPlaceholder>
          </DescriptionWrapper>

          <ImageWrapper>
            <ShimmerPlaceholder
              ref={tweetImgRef}
              visible={visible}
              style={image ? {width: 320, height: 150} : {width: 0, height: 0}}
              shimmerStyle={{borderRadius: 20}}
              stopAutoRun>
              {image && <ImageContent source={{uri: image}} />}
            </ShimmerPlaceholder>
          </ImageWrapper>

          <Icons>
            <Comments>
              <CommentsIcon />
              <ShimmerPlaceholder
                ref={descRef}
                visible={visible}
                style={{width: 30}}
                stopAutoRun>
                <CommentsNumber> {comments}</CommentsNumber>
              </ShimmerPlaceholder>
            </Comments>
            <Retweets>
              <RetweetIcon size={30} retweets={retweets} />
              <ShimmerPlaceholder
                ref={descRef}
                visible={visible}
                style={{width: 30}}
                stopAutoRun>
                <RetweetsNumber retweets={retweets}> {retweets}</RetweetsNumber>
              </ShimmerPlaceholder>
            </Retweets>
            <Likes>
              <LikesIcon likes={likes} />
              <ShimmerPlaceholder
                ref={descRef}
                visible={visible}
                style={{width: 30}}
                stopAutoRun>
                <LikesNumber likes={likes}> {likes}</LikesNumber>
              </ShimmerPlaceholder>
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
