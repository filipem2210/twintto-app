import styled, {css} from 'styled-components/native';

import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IoIcon from 'react-native-vector-icons/Ionicons';

const iconSize = 25;

export const Container = styled.View`
  padding: 14px 16px;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.colors.border};
`;

export const Retweeted = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 30px;
`;

export const RetweetIcon = styled(MCIcon).attrs((props) => ({
  name: 'twitter-retweet',
  color:
    props.retweets > 0 ? props.theme.colors.retweet : props.theme.colors.gray,
}))``;

export const RetweetText = styled.Text`
  color: ${(props) => props.theme.colors.gray};
`;

export const Body = styled.View`
  margin-top: 3px;
  position: relative;
`;

export const AvatarWrapper = styled.View`
  position: absolute;
  top: 0;
  left: 0;
`;

export const Avatar = styled.Image`
  width: 49px;
  height: 49px;
  border-radius: 49px;
  flex-shrink: 0;
`;

export const Content = styled.View`
  width: 100%;
  margin-top: 2px;
  padding-left: 59px;
`;

export const Header = styled.View`
  flex-direction: row;
`;

export const Name = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 15px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
`;

export const User = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 15px;
  color: ${(props) => props.theme.colors.gray};
`;

export const Dot = styled.Text`
  color: ${(props) => props.theme.colors.gray};
`;

export const Date = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 15px;
  color: ${(props) => props.theme.colors.gray};
`;

export const DescriptionWrapper = styled.View`
  margin-top: 4px;
`;
export const Description = styled.Text`
  font-size: 15px;
  color: ${(props) => props.theme.colors.text};
`;

export const ImageWrapper = styled.View`
  margin-top: 12px;
`;

export const ImageContent = styled.Image`
  width: 100%;
  height: 150px;
  border-width: 1px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-color: ${(props) => props.theme.colors.border};
`;

export const Icons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 11px;
  width: 100%;
`;

const bottomIconsCSS = css`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Comments = styled.View`
  ${bottomIconsCSS}
`;

export const CommentsIcon = styled(IoIcon).attrs((props) => ({
  name: 'chatbubble-outline',
  size: iconSize,
  color: props.theme.colors.gray,
}))``;

export const CommentsNumber = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.colors.gray};
`;

export const Retweets = styled.View`
  ${bottomIconsCSS}
`;

export const RetweetsNumber = styled.Text`
  font-size: 14px;
  color: ${(props) =>
    props.retweets > 0 ? props.theme.colors.retweet : props.theme.colors.gray};
`;

export const Likes = styled.View`
  ${bottomIconsCSS}
`;

export const LikesIcon = styled(IoIcon).attrs((props) => ({
  name: props.likes > 0 ? 'heart-sharp' : 'heart-outline',
  size: iconSize,
  color: props.likes > 0 ? props.theme.colors.like : props.theme.colors.gray,
}))``;

export const LikesNumber = styled.Text`
  font-size: 14px;
  color: ${(props) =>
    props.likes > 0 ? props.theme.colors.like : props.theme.colors.gray};
`;

export const Actions = styled.View`
  ${bottomIconsCSS}
`;

export const ActionsIcon = styled(IoIcon).attrs((props) => ({
  name: 'share-social-outline',
  size: iconSize,
  color: props.theme.colors.gray,
}))``;
