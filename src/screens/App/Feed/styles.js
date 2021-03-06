import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  position: relative;
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Wrapper = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const Tweets = styled.View`
  flex: 1;
  border-top-width: 1px;
  border-top-color: ${(props) => props.theme.colors.border};
`;

export const Logo = styled.Image.attrs({
  width: 25,
  height: 25,
})``;

export const TweetButton = styled(RectButton)`
  position: absolute;
  bottom: 15px;
  right: 15px;
  height: 55px;
  width: 55px;
  border-radius: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.twitter};
`;

export const WriteIcon = styled.Image``;
