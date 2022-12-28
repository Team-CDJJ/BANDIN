import styled from 'styled-components';

export const ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  z-index: 99;
`;
export const CommentWrapper = styled.div`
  margin-bottom: 20px;
`;
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const UserName = styled.strong`
  font-weight: 800;
  font-size: 15px;
  margin-left: 10px;
  margin-right: 12px;
`;

export const CreatedTime = styled.p`
  font-size: 10px;
`;

export const CommentContent = styled.p`
  margin-left: 46px;
  margin-top: 10px;
`;
