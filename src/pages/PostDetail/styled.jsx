import styled, { css } from 'styled-components';

export const PostWrapper = styled.div`
  ${({ theme }) => {
    return css`
      margin-top: 68px;
      padding-bottom: 24px;
      border-bottom: 1px solid ${theme.colors.greyDB};
    `;
  }}
`;

export const CommentWrapper = styled.section`
  top: 502px;
  width: 390px;
  margin: 0 auto;
  padding: 18px 16px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 61px;
`;
