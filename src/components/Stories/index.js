import React, {useState, useEffect, createRef} from 'react';
import {Animated} from 'react-native';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

import {
  Container,
  Storie,
  AvatarWrapper,
  Avatar,
  Name,
  PlusIcon,
} from './styles';

export default function Stories() {
  const avatarRef = createRef();
  const [avatarVisible, setAvatarVisible] = useState(false);

  useEffect(() => {
    const shimmerAnimated = Animated.stagger(400, [
      avatarRef.current.getAnimated(),
    ]);
    Animated.loop(shimmerAnimated).start();
  }, [avatarRef]);

  return (
    <Container>
      <Storie>
        <AvatarWrapper>
          <ShimmerPlaceholder
            ref={avatarRef}
            width={60}
            height={60}
            shimmerStyle={{borderRadius: 60}}
            visible={avatarVisible}>
            <Avatar
              source={{
                uri:
                  'https://pbs.twimg.com/profile_images/1260607790323830791/NGrNpCkO_bigger.jpg',
              }}
              onLoadEnd={() => setAvatarVisible(true)}
            />
          </ShimmerPlaceholder>
          <PlusIcon />
        </AvatarWrapper>
        <Name>filipem2210</Name>
      </Storie>
    </Container>
  );
}
