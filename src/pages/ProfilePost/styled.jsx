import styled from 'styled-components';
import ListIconOn from '../../assets/icon-post-list-on.png';
import ListIconOff from '../../assets/icon-post-list-off.png';
import AlbumIconOn from '../../assets/icon-post-album-on.png';
import AlbumIconOff from '../../assets/icon-post-album-off.png';

export const PostHeaderNav = styled.div`
  height: 44px;
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  align-items: center;
  padding-right: 16px;
  border-bottom: 0.5px solid #dbdbdb;
`;

export const ListIcon = styled.button`
  outline: none;
  border: none;
  background: no-repeat center
    ${(props) =>
      props.listClicked ? `url(${ListIconOn})` : `url(${ListIconOff})`};
  background-size: 23px 23px;
  width: 26px;
  height: 26px;
`;

export const AlbumIcon = styled.button`
  outline: none;
  border: none;
  background: no-repeat center
    ${(props) =>
      props.albumClicked ? `url(${AlbumIconOff})` : `url(${AlbumIconOn})`};
  background-size: 23px 23px;
  width: 26px;
  height: 26px;
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
