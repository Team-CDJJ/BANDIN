import styled from 'styled-components';

export const PostListWapper = styled.ul`
  padding: 16px 0 90px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const PostGridWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
  padding: 16px;
  margin-bottom: 74px;

  & img {
    width: 114px;
    height: 114px;
  }
`;
