import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TweetsButton = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-bottom: 8px;
  border-bottom-width: 3px;
`;

export const TweetsText = styled.Text`
  font-weight: bold;
`;

export const TweetsAnswersButton = styled.TouchableOpacity`
  flex: 2;
  align-items: center;
  justify-content: center;
  padding-bottom: 8px;
  border-bottom-width: 3px;
  border-bottom-color: transparent;
`;

export const TweetsAnswersText = styled.Text`
  font-weight: bold;
`;

export const MediaButton = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-bottom: 8px;
  border-bottom-width: 3px;
  border-bottom-color: transparent;
`;

export const MediaText = styled.Text`
  font-weight: bold;
`;

export const LikesButton = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-bottom: 8px;
  border-bottom-width: 3px;
  border-bottom-color: transparent;
`;

export const LikesText = styled.Text`
  font-weight: bold;
`;
