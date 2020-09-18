import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  padding: 14px 16px;
  border-bottom-width: 1px;
`;

export const Retweeted = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 30px;
`;

export const Body = styled.View`
  margin-top: 3px;
  position: relative;
`;

export const Avatar = styled.Image`
  width: 49px;
  height: 49px;
  border-radius: 49px;
  flex-shrink: 0;
  background-color: gray;
  position: absolute;
  top: 0;
  left: 0;
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
`;

export const User = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 15px;
`;

export const Date = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 15px;
`;

export const Description = styled.Text`
  font-size: 15px;
  margin-top: 4px;
`;

export const ImageWrapper = styled.View`
  margin-top: 12px;
`;

export const ImageContent = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100%;
  height: 150px;
  border-radius: 15px;
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

export const CommentsNumber = styled.Text`
  font-size: 14px;
`;

export const Retweets = styled.View`
  ${bottomIconsCSS}
`;

export const RetweetsNumber = styled.Text`
  font-size: 14px;
`;

export const Likes = styled.View`
  ${bottomIconsCSS}
`;

export const LikesNumber = styled.Text`
  font-size: 14px;
`;

export const Actions = styled.View`
  ${bottomIconsCSS}
`;
