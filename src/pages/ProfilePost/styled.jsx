import styled from 'styled-components';

export const PostWrapper = styled.div`
  margin-bottom: 78px;
`;

export const PostHeaderNav = styled.div`
  height: 44px;
  width: 100%;
  display: flex;
  gap: 16px;
  justify-content: flex-end;
  align-items: center;
  padding-right: 16px;
  border-bottom: 0.5px solid #dbdbdb;
  border-top: 0.5px solid #dbdbdb;
`;

export const ListIcon = styled.button`
  outline: none;
  border: none;
  background: no-repeat / center;
  background-color: #ffffff;
  height: 26px;

  > img {
    width: 26px;
    height: 26px;
  }
`;

export const AlbumIcon = styled.button`
  outline: none;
  border: none;
  background-color: #ffffff;
  background: no-repeat center;
  height: 26px;

  > img {
    width: 26px;
    height: 26px;
  }
`;

export const PostUl = styled.ul`
  padding: 16px;
`;

export const PostGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
  padding: 16px;
  margin-bottom: 30px;

  & img {
    width: 114px;
    height: 114px;
  }
`;
